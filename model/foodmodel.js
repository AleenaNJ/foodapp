const mongoose=require("mongoose");
const foodSchema=new mongoose.Schema({
    name:String,
    price:String,
    item:String,
    pay:String,
    
   


})

module.exports=mongoose.model("food",foodSchema)