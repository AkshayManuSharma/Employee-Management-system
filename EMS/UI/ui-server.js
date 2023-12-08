const express = require('express')
const path = require('path')
require('dotenv').config()
const app = express()

app.use(express.static('public'))
const GRAPHQL_API_ENDPOINT = process.env.GRAPHQL_API_ENDPOINT || "http://localhost:3000/graphql"
const PORT = process.env.PORT || 8000
const env = {GRAPHQL_API_ENDPOINT}

app.get('/env.js',(req,res)=>{
    res.send(`window.ENV = ${JSON.stringify(env)}`)
})
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.listen(PORT,(req,res)=>{
    console.log(`UI server is running on ${PORT}`)
})