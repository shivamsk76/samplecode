const express = require('express')
var app = express()
const bodyParser = require('body-parser')
const cors = require('cors')




const PORT = process.env.port || 8080
app.use(bodyParser.json())

app.get('/', function(req,res)
{
    let testvar = process.env.test
    console.log("shivam",testvar);
    res.send("You are Connected")
    res.render("okay")
})

app.listen(PORT , console.log("server is running",PORT))