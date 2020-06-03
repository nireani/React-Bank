const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express()
const api = require('./server/rouets/api')


mongoose.connect("mongodb://localhost/bankDB", { useNewUrlParser: true, useUnifiedTopology: true  })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use('/', api)


const port = 8000
app.listen(process.env.PORT || port, function () {
    console.log(`Server running on ${port}`)
})