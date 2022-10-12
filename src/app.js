const express = require("express")
require("../src/db/conn");
const app = express();
const PORT =process.env.PORT|| 8000;
app.get("/",(req,res)=>{
    res.send("this is home ")
})


app.listen(PORT,()=>{
    console.log("connecting is live at port: 8000")
})