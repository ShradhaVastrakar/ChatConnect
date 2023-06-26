const express = require("express");
const app = express()
require("dotenv").config()
app.use(express.json())
const {userRouter} = require("./Routes/User")

const {connection} = require("./db")

app.get("/", (req,res) =>{
    res.send("Welcome to Chat Connection")
})

app.use("/users", userRouter)

app.listen(process.env.port, async ()=>{
    try{
        await connection
        console.log("Connected to DB")
    } catch(err){
        console.log(err.message)
    }
    console.log(`Server is listening at port ${process.env.port}`)
})
