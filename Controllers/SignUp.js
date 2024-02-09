const express=require("express")
const userModel=require("../Models/userModel")
const router=express.Router()

router.post("/signup",async(req,res)=>{
    let data=req.body
    let user=new userModel(data)
    let result=await user.save()
    res.json({
        status:"success"
    })
})

module.exports=router