const router = require('express').Router()
//Require bcryp 
const Product = require('../models/Product')
require('dotenv').config({path:'./config/.env'})
const bcrypt = require('bcrypt')


router.post("/addProduct",async(req,res)=>{
    const {name,Price,Imgae,Descripation,Quntites}=req.body
    try{
        const newProduct =new Product({
          
            name,
            Price,
            Imgae,
            Descripation,
            Quntites
        })
       const Prod = await newProduct.save()
        res.json({msg:"Product added",Prod})
    }catch(error){
        console.log(error)
    }   
   
    
})
//Take all user 
router.get("/Product",async(req,res)=>{
    try{
      const Productall= await Product.find()
        res.json({msg:"data fetched",Productall})
    }catch(error){
        console.log(error)
    }
})
router.delete("/DeleteProd/:id",async(req,res)=>{
    const {id} = req.params
    try{
      const Productall= await Product.findByIdAndDelete({_id:id})
        res.json({msg:"data fetched",Productall})
    }catch(error){
        console.log(error)
    }
})

router.put('/ProductUpdate/:_id',async(req,res)=>{
    const {_id}=req.params
    try{
        const ProductUpdated = await Product.findOneAndUpdate({_id}, { $set: req.body })
        res.json({msg:"Data upadted",ProductUpdated})
    }catch(err){
        console.log(err)
    }
})

module.exports = router;