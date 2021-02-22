const mongoose = require('mongoose')
//Require schema from mongoose 
const Schema = mongoose.Schema 
//Ceat the user shema 
const userShema = new Schema({
    name:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
<<<<<<< HEAD
    Aritcles:[],
    article01:[],
    Pannier :{
        Number:{type:Number,
        default:0}
    }
    
=======
    isAdmin: { type: Boolean, required: true, default: false },
>>>>>>> 0e5a445bd155ab9c18e97b1b24f89368d90f38b7
}); 

module.exports=User= mongoose.model('User',userShema)