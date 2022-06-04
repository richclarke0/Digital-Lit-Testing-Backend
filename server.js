
//dependencies
require("dotenv").config()
require("./config/connection")
// const { PORT = 3001 } = process.env
const PORT = process.env.PORT || 3001

// import express
const express = require("express")
const app = express()
const DATABASE_URL = process.env.DATABASE_URL
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")
const QuestionModel = require("./models/questionModel")

//mids
app.use(cors()) // to prevent cors errors, open access to all origins
app.use(morgan("dev")) // logging
app.use(express.json())


// root
app.get("/", (req, res) => {
  res.send("asdfasfd")
})

// index
app.get("/questions", async (req, res) => {
  try {
    res.json(await (await QuestionModel.find({})).reverse())
    //comment
  } catch (error) {
    res.status(400).json(error)
  }
})

// create question
app.post("/question", async (req, res) => {
  try {
    res.json(await QuestionModel.create(req.body))
  } catch (error) {
    res.status(400).json(error)
  }
})

// delete question
app.delete("/question/:id", async (req, res) => {
  try {
    res.json(await QuestionModel.findByIdAndDelete(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
})

// update question
app.put("/question/:id", async (req, res) => {
  try {
    res.json(
      await QuestionModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    )
  } catch (error) {
    res.status(400).json(error)
  }
})


//listen
app.listen(PORT, () => console.log(`port ${PORT} moo`))