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

    router.get("/viewall",async(req,res)=>{

        let data=await foodmodel.find()
        res.json(data)      
    
    })

    


})
module.exports=router