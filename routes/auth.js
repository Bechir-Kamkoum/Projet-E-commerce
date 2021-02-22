const router = require('express').Router()
//Require bcryp 
require('dotenv').config({path:'./config'})

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
const User = require('../models/User')
const isAuth = require('../middlerwares/isAuth')
const {validator , registerRules , loginRules} = require('../middlerwares/validator')
const { findOneAndUpdate } = require('../models/User')

router.post('/register',registerRules() ,validator,async (req,res)=>{
    const{name,lastName,email,password}=req.body; 
    try{
        // if(!name || !lastName || !email || !password ){
        //     return res.status(400).json({msg :'Plese enter all fild'})
        // }
    //Check exsitance user 
    let user = await User.findOne({email})
    if(user){
        return res.status(400).json({msg:'User allredy existe'})
    }
    //Create new User 
    user = new User({name , lastName , email , password}); 
    //Save 
    const salt = 10 
    const hashedPassword = await bcrypt.hash(password,salt)
    user.password=hashedPassword;
    await user.save();
    //sign user 
    const payload ={
        id:user._id
    };
    const token = await jwt.sign(payload , process.env.sercerOrkey,{
        expiresIn:'30 days',
    });
    res.status(200).send({msg:'User registred wwith succed',user,token})

    } catch(error) {
        res.status(500).send({msg:'server error'})
    }
})
router.post("/login",loginRules(),validator,async(req,res)=>{
    const {email , password } = req.body 
    try{ 
        // if(!email || !password) {
        //     return res.status(200).send({msg: "Please enter all fields"})
        // }
        let user = await User.findOne({email})
        if(!user) {
            res.status(200).send({msg:'bad Creadtials! Email'})
        }
        const isMatch= await bcrypt.compare(password , user.password)
        if(!isMatch) {
            return res.status(200).send({msg:'bad Creadtials password'})
        }
        const payload ={
            id:user._id
        };
        const token = await jwt.sign(payload , process.env.sercerOrkey,{
            expiresIn:'30 days',
        });
        res.send({msg: "logged in with succes",user,token})
    } catch (error) {
        res.status(500).send({msg:'server error'})
    }
})

//update user info
router.put('/updateInfo/:_id',  async (req, res) => {
    const {_id} = req.params;
    try{
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const updatedUser = await User.findOneAndUpdate({_id}, { $set: req.body },{new:true})
    /*const salt = 10 
    const hashedPassword = await bcrypt.hash(password,salt)
     updatedUser.password=  hashedPassword*/

      res.send({msg:"updated",updatedUser})
    }catch(error){
        console.log(error)
     }
     
 })

router.put('/update/:email',async(req,res)=>{
    const {email}=req.params
    const{name , price ,Product,Quntites}=req.body; 
    try{
        const Updataed =  await User.findOneAndUpdate({email},{$push:{Aritcles:{name , price , Product , Quntites}},}, {new:true})
        res.send({msg:"updated",Updataed})
    }catch(error){
       console.log(error)
    }
    
})
router.put('/Dell/:email',async(req,res)=>{
    const {email}=req.params
    const{name , price ,Product,Quntites}=req.body; 
    try{
        const Updataed =  await User.findOneAndUpdate({email},{$pull:{Aritcles:{name , price , Product , Quntites}}})
        res.send({msg:"updated",Updataed})
    }catch(error){
       console.log(error)
    }
    
})
router.put('/Deleted/:email',async(req,res)=>{
    const {email}=req.params
    const{name , price ,Product,Quntites}=req.body; 
    try{
        const Updatdaed =  await User.findOneAndUpdate({email},{$pull:{Aritcles:{name,price,Product,Quntites}}})
        res.send({msg:"updated",Updatdaed})
    }catch(error){
       console.log(error)
    }
    
})

router.get('/user/:email',async(req,res)=>{
    const {email}=req.params
    
    try{
        const Findone =  await User.findOne({email})
        res.send({msg:"updated",Findone})
    }catch(error){
       console.log(error)
    }
    
})
router.get('/Admin', (req,res)=>{
    res.status(200).send({user:req.user})
})
router.get('/user',isAuth, (req,res)=>{
    res.status(200).send({user:req.user})
})
router.get('/alluser',async(req,res)=>{
    try{
        const findAll = await User.find()
        res.json({msg:"data fatched",findAll})
    }catch(err){
        console.log(err)
    }
})
router.delete('/DeletedUser/:email',async(req,res)=>{ 
    const {email}=req.params
    try{
        const DeletedUser = await User.findOneAndDelete({email}) 
        res.json({msg:"Data Deleted",DeletedUser})
    }catch(err){
        console.log(err)
    }
})
router.put('/updateCom/:email',async(req,res)=>{
    const {email}=req.params
    const{name , price ,Product,Quntites}=req.body; 
    try{
        const Updataed =  await User.findOneAndUpdate({email},{$push:{article01:{name , price , Product , Quntites}},}, {new:true})
        res.send({msg:"updated",Updataed})
    }catch(error){
       console.log(error)
    }
    
})
router.put('/UpdatedPanier/:email',async(req,res)=>{
    const {email}=req.params
    const Pannierr=req.body
    try{
        const PannierIncrement = await User.findOneAndUpdate({email} , {$set:{Pannier:Pannierr}},{new:true})
        res.json({msg:"Pennier Updated",PannierIncrement})
    }catch(error){
        console.log(error)
    }
})
module.exports = router;