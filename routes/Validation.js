const router = require('express').Router()
//Require bcryp 
const Validtion = require('../models/Validtion')
require('dotenv').config({path:'./config/.env'})
const bcrypt = require('bcrypt')


router.post("/addProduct01",async(req,res)=>{
    const {user,name,Price,Imgae,Descripation,Quntites}=req.body
    try{
        const newProductV =new Validtion({
            user,
            name,
            Price,
            Imgae,
            Descripation,
            Quntites
        })
       const Prod = await newProductV.save()
        res.json({msg:"contact added",Prod})
    }catch(error){
        console.log(error)
    }   
   
    
})
//Take all user 
router.get("/Validator",async(req,res)=>{
    try{
      const Validtiond= await Validtion.find()
        res.json({msg:"data fetched",Validtiond})
    }catch(error){
        console.log(error)
    }
})
router.delete("/DeleteProd/:id",async(req,res)=>{
    const {id} = req.params
    try{
      const Productall= await Validtion.findByIdAndDelete({_id:id})
        res.json({msg:"data fetched",Productall})
    }catch(error){
        console.log(error)
    }
})


module.exports = router;