const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
    title: {type:String,required:true},
    img: {type:String,required:true},
    price:{type:Number,required:true},
    company:{type:String,required:true},
    info:{type:String,required:true},
    inCart:{type:Boolean,required:true},
    count:{type:Number,required:true},
    total: {type:Number,required:true}
    }
);

const Product =mongoose.model('Product',ProductSchema);

module.exports=Product;