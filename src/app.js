const express = require("express");
require("../src/db/conn");
const mensRanking = require("../src/models/mens")
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
// we will handle post req 
app.post("/mens", async (req,res)=>{
    // res.send("this is root of this page!")
    try {
        const addingMensRecord = new mensRanking(req.body);
        console.log(req.body);
   const insertMens = await  addingMensRecord.save();
   res.send(insertMens);
        
    } catch (e) {
        res.send(e)
    }
})
app.listen(PORT, () => {
  console.log("connecting is live at port: 3000");
});
