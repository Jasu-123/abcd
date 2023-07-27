const express=require("express")
const router=express.Router();
router.get("/login",(req,res)=>{
    res.send("welcome")
   
    });

router.post("/login/:id",(req,res)=>{
    console.log(req.params.id);
    res.send("esrr")
});

module.exports=router

