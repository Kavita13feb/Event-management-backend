require('dotenv').config();
const mongoose =require("mongoose")
const Connection= mongoose.connect(process.env.mongoUrl)
module.exports=Connection