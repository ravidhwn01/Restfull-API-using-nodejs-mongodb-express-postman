// here we are using express router
const express = require("express");
const router = new express.Router();
const mensRanking = require("../models/mens");

// we will handle post req  (working successfully 😍)
router.post("/mens", async (req, res) => {
    // res.send("this is root of this page!")
    try {
      const addingMensRecord = new mensRanking(req.body); // fetching data from postman
      // console.log(req.body);
      const insertMens = await addingMensRecord.save(); // ye promise return krta hai to wait krna padega
      res.status(201).send(insertMens);
    } catch (e) {
      res.status(400).send(e); // 400 bad request
    }
  });
  // fetch all data using get req    (working successfully 😍)
  router.get("/mens", async (req, res) => {
    try {
      const getMens = await mensRanking.find({});
  
      res.status(201).send(getMens);
    } catch (e) {
      res.status(400).send(e); // 400 bad request
    }
  });
  // single data using id by get req
  router.get("/mens/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const getMen = await mensRanking.findById(_id);
  
      res.status(201).send(getMen);
    } catch (e) {
      res.status(400).send(e); // 400 bad request
    }
  });
  // updating data of individuals using patch req 
  router.patch("/mens/:id",async (req,res)=>{
      try {
          const _id = req.params.id;
          const updateMen = await mensRanking.findByIdAndUpdate(_id,req.body,{new:true});
          res.send(updateMen);
      } catch (e) {
          res.status(500).send(e);
      }
  })
  // deleting data of individuals using delete req 
  router.delete("/mens/:id",async (req,res)=>{
      try {
         
          const deleteMen = await mensRanking.findByIdAndDelete(req.params.id);
          res.send(deleteMen);
      } catch (e) {
          res.status(500).send(e);
      }
  })

  module.exports = router;