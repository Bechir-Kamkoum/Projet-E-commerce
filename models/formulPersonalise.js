const mongoose = require('mongoose')
//Require schema from mongoose 
const Schema = mongoose.Schema 
//Ceat the user shema 
const FormulairSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    Price:{
        type:Number,
        required: true
    },
    Image:{
        type:String
    },

    text:{
        type:String
    },
    Quntites:{
        type:Number
    }
}); 

module.exports=Formulaire= mongoose.model('formulaire',FormulairSchema)