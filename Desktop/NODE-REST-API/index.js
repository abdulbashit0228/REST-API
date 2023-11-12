const express = require("express")
const coursesRouter = require("./routes/courses")

require("dotenv").config()
const mongoose =require("mongoose")

const app = express()



app.use("/api/v1/courses",coursesRouter)

mongoose.connect("mongodb://localhost:27017/latestdb",{
    
},(err))

app.listen(process.env.PORT, ()=>{
    console.log("Server is running ..."); 
})