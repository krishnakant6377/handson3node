const express = require("express")

const app = express()

const middle = (req, res, next) => {
    console.log("middleware")
    next()
}

const middle2 = (req, res, next) => {
    console.log("middleware2")
    next()
}
app.use(middle)

app.get("/",  (req, res) => {
    console.log("api zero")
    res.send("this is default Api")
})

app.get("/one", middle2, (req, res) => {
    console.log("api first")
    res.send("this is first Api")
})

app.get("/two", middle2, (req, res) => {
    console.log("api second")
    res.send("this is second Api")
})

app.get("/three", (req, res) => {
    console.log("api third")
    res.send("this is third Api")
})

app.get("/four", (req, res) => {
    console.log("api fourth")
    res.send("this is fourth Api")
})

app.listen(4040, console.log(4040))