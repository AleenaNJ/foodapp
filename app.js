const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const foodrouter=require("./controller/foodrouter")

const app=express()


app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://aleena2681:alee@cluster0.okresfv.mongodb.net/foodDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)
app.use("/api/food",foodrouter)

app.listen(3001,()=>{
    console.log("server running")
})