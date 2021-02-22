// require json web token 
const jwt = require('jsonwebtoken')
//Require the user Schema 
const User = require('../models/User')

const isAuth = async(req,res,next)=>{
    try{
        const token = req.headers['x-auth-token']
    //Check 
    if(!token){
        return res.status(401).send({msg:"No Token , authorization danied"})
    }
    
    const deacoded = await jwt.verify(token,process.env.sercerOrkey)
    const user = await User.findById(deacoded.id)
    if(!user){
        return res.status(401).send({msg:"authorization danied"})
    }
    req.user = user
    next()
    } catch (error){
        return res.status(400).json({msg: "Token is not valid"})
    }
};
module.exports=isAuth