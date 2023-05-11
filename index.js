const data = require("./data.json")
const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())


const port = 3001

app.get("/", (req,res) => {
    res.send("Hello World")
})

app.get("/data", (req,res) => {
    res.send(data)
})

app.get("/data/founded", (req,res) => {
    const founded = data.map((item) => item.founded)
    res.send(founded)
})

app.get("/data/:id", (req,res) => {
    console.log(req.params)
    const id = req.params.id
    const item = data.find(item => item.id === Number(id))
    res.send(item)
})

app.get("/data/year/:founded", (req,res) => {
    const founded = req.params.founded
    const item = data.find(item => item.founded)
    res.send(item)
})

// app.get("/data/:specialties", (req,res) => {
//     const specialties = req.params.specialties
//     const item = data.find(item.specialties => )

// })

app.listen(port, () => {
    console.log("server is running on port 3001")
})