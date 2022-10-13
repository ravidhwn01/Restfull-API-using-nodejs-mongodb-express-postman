const express = require("express");
const mongoose = require("mongoose");
// creating document or schema
const menSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: Date,
    required: true,
    trim: true,
  },
  Country: {
    type: String,
    required: true,
    trim: true,
  },

  score: {
    type: Number,
    required: true,
    trim: true,
  },
  event: {
    type: String,
    default: "100m",
  },
});
// creating a new collection
const menRanking = new mongoose.model("MenRanking", menSchema);
module.exports = menRanking;
