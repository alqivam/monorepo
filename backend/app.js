const express = require("express")
const app = express()
const port = 8080
const bodyParser = require("body-parser")
const { v4: uuid } = require("uuid")
const cookieParser = require("cookie-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieParser())

app.listen(port, console.log("Server is up and running."))