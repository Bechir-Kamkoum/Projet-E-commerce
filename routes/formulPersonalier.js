const router = require('express').Router()
//Require bcryp 
const Formulaire = require('../models/formulPersonalise')
require('dotenv').config({path:'./config/.env'})


router.post("/addFormulaire",async(req,res)=>{
    const {name,Price,Image,text,Quntites}=req.body
    try{
        const newFormulaire =new Formulaire({
            name,
            Price,
            Image,
            text,
            Quntites
        })
       const Form = await newFormulaire.save()
        res.json({msg:"form added",Form})
    }catch(error){
        console.log(error)
    }   
   
    
})

router.get("/formulaire",async(req,res)=>{
    try{
      const allForm= await Formulaire.find()
        res.json({msg:"data fetched",allForm})
    }catch(error){
        console.log(error)
    }
})

router.delete("/DeletedFormul/:_id",async(req,res)=>{
    const {_id} = req.params
    try{
      const DeletedForm= await Formulaire.findOneAndDelete({_id})
        res.json({msg:"data fetched",DeletedForm})
    }catch(error){
        console.log(error)
    }
})





module.exports = router