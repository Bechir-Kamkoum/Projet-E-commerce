const mongoose = require('mongoose')
//Require schema from mongoose 
const Schema = mongoose.Schema 
//Ceat the user shema 
const AdminShema = new Schema({

    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    isAdmins :{
        type:Boolean,
        default:false
    }
}); 

module.exports=Admin= mongoose.model('Admin',AdminShema)