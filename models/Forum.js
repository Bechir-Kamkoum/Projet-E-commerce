const mongoose = require('mongoose')
//Require schema from mongoose 
const Schema = mongoose.Schema 
//Ceat the user shema 
const ForumShema = new Schema({

    name:{
        type:String,
        required: true,
    },
    comment:{
        type:String,
        required: true
    }
}); 

module.exports=Forum= mongoose.model('Forum',ForumShema)