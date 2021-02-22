const router = require('express').Router()
//Require bcryp 
const Admin = require('../models/Admins')
require('dotenv').config({path:'./config/.env'})


router.post("/addAdmin",async(req,res)=>{
    const {email,password}=req.body
    try{
        const newAdmin =new Admin({
            email,
            password
        })
       const Prod = await newAdmin.save()
        res.json({msg:"contact added",Prod})
    }catch(error){
        console.log(error)
    }   
   
    
})
//Take all user 
router.get("/FindAdmins",async(req,res)=>{
    try{
      const Productall= await Admin.find()
        res.json({msg:"data fetched",Productall})
    }catch(error){
        console.log(error)
    }
})
router.get("/FindAdmins",async(req,res)=>{
    try{
      const Productall= await Admin.find()
        res.json({msg:"data fetched",Productall})
    }catch(error){
        console.log(error)
    }
})
router.put("/FindAdmins/:id",async(req,res)=>{
    const {id} = req.params
    try{
      const Productall= await Admin.findOneAndUpdate({_id:id},{$set:{isAdmins:true}},{new:true})
        res.json({msg:"data fetched",Productall})
    }catch(error){
        console.log(error)
    }
})
router.put("/Logout/:id",async(req,res)=>{
    const {id} = req.params
    try{
      const Productall= await Admin.findOneAndUpdate({_id:id},{$set:{isAdmins:false}},{new:true})
        res.json({msg:"data fetched",Productall})
    }catch(error){
        console.log(error)
    }
})

router.get("/FindoneAdmin",async(req,res)=>{
    const {email,password}=req.body
    try{
        const VerfiedEmail=await Admin.findOne({email:email})
        const VerifiedPassword= await Admin.findOne({password:password})

        if(VerfiedEmail&&VerifiedPassword) { 
            res.json({msg:"data fetched",VerfiedEmail})
        }
    }catch(error){
        res.status(500).send({msg:'server error',error})
    }
})
router.get('/hopeso/:id',async(req,res)=>{
    const {id}=req.params
    try{
        const Resercha = await Admin.findOne({_id:id}) 
        res.json({msg:"data fetched",Resercha})
    }catch(error){
        console.log(error)
    }
})

module.exports = router;