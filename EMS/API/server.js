const express = require('express');
const cors = require('cors')
const { connectoDB } = require('./libraries/db')
const { installHandler } = require('./libraries/graphqlServer')
const PORT = 3000
const DB_URL = "mongodb+srv://conestoga:2023@cluster0.zm9cakm.mongodb.net/?retryWrites=true&w=majority"
const ENABLE_CORS = true

const app = express()

if(ENABLE_CORS){
    app.use(cors())
}

installHandler(app,ENABLE_CORS)

const initFunction = async ()=>{
    db = await connectoDB(DB_URL)
    app.listen(PORT,(req,res)=>{
        console.log(`Server is running at ${PORT}`)
    })
}

initFunction()