const mongoose = require('mongoose')
//Require schema from mongoose 
const Schema = mongoose.Schema 
//Ceat the user shema 
const PersonliseSchema = new Schema({
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

module.exports=Personlise= mongoose.model('Personlise',PersonliseSchema)