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

router.post("/delete",async(req,res)=>{
    let input=req.body
    let response=await postModel.deleteOne(input)
    res.json({
        status:"success"
    })
})
module.exports=router