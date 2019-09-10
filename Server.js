const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});
const connection = mongoose.connection;

const usersRouter = require('./routes/users');
const productRouter = require('./routes/products');

app.use('/products',productRouter);
app.use('/users',usersRouter);


app.listen(port,()=>{

    
    console.log(`Server is running on port: ${port}`);
    
})

app.get('/', function (req, res) {
    connection.once('open',()=>{

        console.log("MongoDB connected successfully")
    })
    res.send("Hello World");

   });