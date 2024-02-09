const express=require("express")
const userModel=require("../Models/userModel")
const router=express.Router()

const bcrypt=require("bcryptjs")

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/signup",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
    hashPasswordGenerator(password).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
            data.password=hashedPassword
            console.log(data)
            let user=new userModel(data)
            let result=user.save()
            res.json({
                status:"success"
            })
        }
    )
})

router.post("/signin",async(req,res)=>{
    let input=req.body
    let email=req.body.email
    let data=await userModel.findOne({"email":email})
    if (!data) {
        return res.json({
            status:"invalid user entry"
        })
        
    }
    console.log(data)
    let dbPassword=data.password
    let inputPassword=req.body.password
    console.log(dbPassword)
    console.log(inputPassword)

    const match=await bcrypt.compare(inputPassword,dbPassword)
    if (!match) {
        return res.json({
            status:"Invalid password"
        })
    }

    res.json({
        status:"success"
    })
})

module.exports=router