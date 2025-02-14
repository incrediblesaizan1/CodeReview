const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("hello2 world")
})

module.exports = app