const mongoose=require('mongoose');
const ProductSchema=new mongoose.Schema({
    proimage:String,
    proname:String,
    proprice:Number,
    protype:String,
    qnty:Number
})
const product=mongoose.model('product',ProductSchema);
module.exports=product;