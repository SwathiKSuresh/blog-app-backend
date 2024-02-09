const mongoose=require("mongoose")
const userSchema=new mongoose.Schema(
    {
        name:String,
        age:String,
        Phone:String,
        address:String,
        pin:String,
        email:String,
        password:String
    }
)
module.exports=mongoose.model("users",userSchema)