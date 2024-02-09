const express=require("express")
const postModel=require("../Models/postMode")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let post=new postModel(data)
    let result=await post.save()
    res.json({
        status:"success"
    })
})

router.get("/viewall",async(req,res)=>{
    let data=await postModel.find()
    .populate("userId","name age")
    .exec()
    res.json(data)
})

module.exports=router