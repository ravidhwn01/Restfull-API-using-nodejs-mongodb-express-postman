const express = require("express");
const mongoose = require("mongoose")

const menSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        trim:true
    }
})