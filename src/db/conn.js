const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/olymics")
.then(()=>{
    console.log("connection successful...");
}).catch((e)=>{
    console.log("connection failed!")
})