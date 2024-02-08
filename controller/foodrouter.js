const express=require("express")
const foodmodel=require("../model/foodmodel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let food=new foodmodel(data)
    let result=await food.save()
    res.json({
        status:"success"
    })
})
module.exports=router