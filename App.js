const cors=require("cors")
const express=require("express")
const mongoose=require("mongoose")
const singupRoute=require("./Controllers/SignUp")

const postRouter=require("./Controllers/postRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Swathi:Swathi123@cluster0.om2gp.mongodb.net/BlogDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/user",singupRoute)
app.use("/api/post",postRouter)

app.listen(3002,()=>{
    console.log("Server running")
})