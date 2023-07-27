const express=require('express')
const app=express();
const mangoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Home");
})
const authMiddle=(req,res,next)=>{
    console.log("hello");
    console.log(req.body);
    const{email,password}=req.body;
    if(password=="1234")
    {
        next();
        console.log("hey");
    
    }
    else{
        res.send("password is incorrect");
        console.log("incorrect")
    }

}
app.post("/login",authMiddle,(req,res)=>{
    res.send("login successful");
    app.post("/login/:id/:",(req,res)=>{
        console.log(req.params.id)
    })
})
const authroute=require("./src/routes/auth")
app.use("/api",authroute)
mangoose.connect(process.env.DB).then(()=>{
    console.log("connected");
}).catch(err=>{
    console.log("not connected");
});
app.listen(5000,()=>{
    console.log("server listening at port 5000");
})
