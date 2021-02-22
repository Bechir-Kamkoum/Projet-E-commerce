const router = require('express').Router()
//Require bcryp 
const Forum = require('../models/Forum')
require('dotenv').config({path:'./config/.env'})


router.post("/addForum",async(req,res)=>{
    const {name,comment}=req.body
    try{
        const newForum =new Forum({
            name,
           comment
        })
       const Comnt = await newForum.save()
        res.json({msg:"comment added",Comnt})
    }catch(error){
        console.log(error)
    }   
   
    
})

router.get('/allComment',async(req,res)=>{
    try{
        const findCmnt = await Forum.find()
        res.json({msg:"data fetched",findCmnt})
    }catch(err){
        console.log(err)
    }
})

router.delete("/DeleteCmnt/:id",async(req,res)=>{
    const {id} = req.params
    try{
      const delCmnt= await Product.findByIdAndDelete({_id:id})
        res.json({msg:"comment deleted",delCmnt})
    }catch(error){
        console.log(error)
    }
})
module.exports = router;