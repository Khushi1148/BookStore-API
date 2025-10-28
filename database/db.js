const mongoose = require('mongoose')

// Connecting to the Database
const connectToDb = async () => {
    try{
        await mongoose.connect("mongodb+srv://khushigupta3104_db_user:root@cluster0.bpifbs7.mongodb.net/");
        console.log("MongoDB is connected successfully")
    }catch(error){
        console.error("Mongodb connection failed", err)
        process.exit(1)
    }
}

module.exports = connectToDb