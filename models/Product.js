const mongoose = require('mongoose')
//Require schema from mongoose 
const Schema = mongoose.Schema 
//Ceat the user shema 
const ProductSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    Price:{
        type:Number,
        required: true
    },
    Imgae:{
        type:String
    },
    Descripation:{
        type:String
    },
    Quntites:{
        type:Number
    }
}); 

module.exports=Product= mongoose.model('Product',ProductSchema)