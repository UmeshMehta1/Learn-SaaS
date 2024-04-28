const express = require('express')

const app = express();

require('dotenv').config()
const PORT= process.env.PORT || 4000

////db connect
require('./model/index')

app.get("/",(req,res)=>{
    res.send("Live")
})




app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`)
})