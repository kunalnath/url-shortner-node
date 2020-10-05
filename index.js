const express = require('express')
const configureDB = require('./config/database')
const route = require('./config/routes')
const app = express()
const port = 3055

configureDB()

app.use(express.json())

app.use(route)

app.listen(port,()=>{
    console.log('server running on port',port)
})