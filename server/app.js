const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true });
const { connection } = mongoose;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const adminRouter = require('./routes/admin');
const orderRouter = require('./routes/order');
const cartRouter = require('./routes/cart');

const app = express();

console.log(process.env.JWT_SECRET_ADMIN)
console.log(process.env.JWT_SECRET_USER)
console.log(process.env.ATLAS_URI)
console.log(process.env.ATLAS_URI)

// Middlewares
app.use(
  cors({
    origin: ['https://aqueous-castle-08428.herokuapp.com/', 'http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
  }),
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/admin', adminRouter);
app.use('/orders', orderRouter);
app.use('/cart', cartRouter);

module.exports = app;
