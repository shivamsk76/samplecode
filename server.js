const express = require('express')
const path = require('path')
var app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.port || 8080

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'form', 'build')))

app.listen(PORT , console.log("server is running",PORT))