
//dependencies
require("dotenv").config()
require("./config/connection")
// const { PORT = 3001 } = process.env
const PORT = process.env.PORT || 3001

// import express
const express = require("express")
const app = express()
const cowsay = require("cowsay"); //dev dependency for logging fun
const DATABASE_URL = process.env.DATABASE_URL
const mongoose = require("mongoose")

// create a test route
app.get("/", (req, res) => {
  res.send("hello world")
})

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(cowsay.say({
text: `port ${PORT} moo`
})))