const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Book title is required'],
        trim : true,
        maxLength : [100, 'Book title can not be more than 100 characters, got {VALUE} characters']
    },
    author : {
        type : String,
        required: [true, 'Book Author is required'],
        trim : true,
    },
    year : {
        type : Number,
        required : [true, 'Publication Year is required'],
        min : [1000, 'Year must be atleast 1000'],
        max : [new Date().getFullYear(), 'Year cannot be greater than the current year']
    },
    createdAt : {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Books", bookSchema)