const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// MODELS
const Product = require('./models/product');

//connect to mongoose
mongoose.connect('mongodb://127.0.0.1/shop_db').then((result)=>{
    console.log('connected to mongoDB');
}).catch((err)=>{
    console.log(err);
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.send('Hello world')
})


app.listen(3000,()=>{
    console.log('shop app listening on http://127.0.0.1:3000')
})