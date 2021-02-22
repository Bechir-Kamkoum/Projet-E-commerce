const router = require('express').Router()
//Require bcryp 
const Personlise = require('../models/Personlise')
require('dotenv').config({path:'./config/.env'})


router.post("/addPersonlise",async(req,res)=>{
    const {name,Price,Imgae,Descripation,Quntites}=req.body
    try{
        const newPersonlise =new Personlise({
            name,
            Price,
            Imgae,
            Descripation,
            Quntites
        })
       const Prod = await newPersonlise.save()
        res.json({msg:"contact added",Prod})
    }catch(error){
        console.log(error)
    }   
   
    
})
//Take all user 
router.get("/Personlise",async(req,res)=>{
    try{
      const Productall= await Personlise.find()
        res.json({msg:"data fetched",Productall})
    }catch(error){
        console.log(error)
    }
})

router.get("/Personlisefindone/:id",async(req,res)=>{
    const {id}= req.params
    try{
      const Productone= await Personlise.findOne({_id:id})
        res.json({msg:"data fetched",Productone})
    }catch(error){
        console.log(error)
    }
})

router.delete("/DeleteProdPr/:id",async(req,res)=>{
    const {id} = req.params
    try{
      const Productall= await Personlise.findByIdAndDelete({_id:id})
        res.json({msg:"data fetched",Productall})
    }catch(error){
        console.log(error)
    }
})
router.put('/ProductUpdatePR/:_id',async(req,res)=>{
    const {_id}=req.params
    try{
        const ProductUpdated = await Personlise.findOneAndUpdate({_id}, { $set: req.body })
        res.json({msg:"Data upadted",ProductUpdated})
    }catch(err){
        console.log(err)
    }
})
module.exports = router;