var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
var cors = require("cors")
var mongoose = require("mongoose")
require("dotenv").config()

const uri = process.env.ATLAS_URI

mongoose.connect(uri, { useNewUrlParser: true })
const connection = mongoose.connection
connection.once("open", () => {
  console.log("MongoDB database connection established successfully")
})

const indexRouter = require("./routes/index")
const usersRouter = require("./routes/users")
const productsRouter = require("./routes/products")
const adminRouter = require("./routes/admin")
const orderRouter = require("./routes/order")
const cartRouter = require("./routes/cart")

const app = express()

//Middlewares
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
)
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)
app.use("/users", usersRouter)
app.use("/products", productsRouter)
app.use("/admin", adminRouter)
app.use("/orders", orderRouter)
app.use("/cart", cartRouter)

module.exports = app
