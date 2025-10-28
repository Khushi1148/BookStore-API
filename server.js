require('dotenv').config()
const express = require('express')
const connectToDb = require("./database/db")
const bookroutes = require("./routes/book-routes")

const app = express()
const port = process.env.PORT || 3000;

// connect to our database
connectToDb();

// middleware -> express.json()
app.use(express.json())

// routes here
app.use('/api/books', bookroutes)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})