const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authAdmin = require('./middleware/authAdmin');


const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true });
const { connection } = mongoose;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const orderRouter = require('./routes/order');
const cartRouter = require('./routes/cart');

const app = express();

// console.log(process.env.API_KEY)
// console.log(process.env.JWT_SECRET_USER)
// console.log(process.env.JWT_SECRET_ADMIN)
// console.log(process.env.CLIENT_URL)

// Middlewares
app.use(
  cors({
    origin: ['https://aqueous-castle-08428.herokuapp.com', 'http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
  }),
);

// app.set('trust proxy', 1);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', req.headers.origin);
//   res.header('Access-Control-Allow-Credentials', true)
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/orders', orderRouter);
app.use('/cart', cartRouter);

module.exports = app;
