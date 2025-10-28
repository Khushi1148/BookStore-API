const book = require('../models/book');
const Book = require('../models/book')


// GET: All Books
const getAllBooks = async (req, res) => {
    try{
        const allBooks = await Book.find({})
        if(allBooks?.length > 0){
            res.status(200).json({
                success: true,
                message: "List of books fetched successfully",
                data: allBooks,
            });
        }else{
            res.status(404).json({
                success: false,
                message: "No books found in the collection",
            })
        }
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Something went wrong! Please try again"
        });

    }
}

// GET: Single Book By ID
const getSingleBookById = async (req, res) => {
    try{

        const getCurrentBookID = req.params.id;
        const bookDetailsByID = await Book .findById(getCurrentBookID);
        if(bookDetailsByID){
            res.status(200).json({
                success: true,
                message: "Book fetched successfully",
                data: bookDetailsByID,
            });
        }else{
            res.status(404).json({
                success: false,
                message: "No book with mentioned ID found in the collection",
            })
        }

    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Something went wrong! Please try again"
        });
    }
}


// CREATE: new book
const addBook = async (req, res) => {
    try{
        // this is the request coming, so we need to get the request body
        const newBookFormData = req.body;
        const newCreatedBook = await Book.create(newBookFormData);
        if(newCreatedBook){
            res.status(201).json({
                success : true,
                message : 'Book added successfully',
                data : newCreatedBook
            })
        }

    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Something went wrong! Please try again"
        });
    }
}

// UPDATE (PUT Request)
const updateBook = async (req, res) => {
    try{
        const updatedBookFormData = req.body;
        const getCurrentBookID = req.params.id;
        const updatedBook = await Book.findByIdAndUpdate(getCurrentBookID, updatedBookFormData, {new: true});

        if (!updatedBook){
            res.status(404).json({
                success: false,
                message: "No book with mentioned ID found in the collection",
            })
        }
        
        res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data: updatedBook
        })

    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Something went wrong! Please try again"
        });
    }

}

// DELETE 
const deleteBook = async (req, res) => {
    try{
        const getCurrentBookId = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(getCurrentBookId);
        if(deletedBook){
            res.status(200).json({
                success: true,
                message: "Book deleted successfully",
                data: deletedBook,
            });
        }else{
            res.status(404).json({
                success: false,
                message: "No book with mentioned ID found in the collection",
            })
        }

    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Something went wrong! Please try again"
        });
    }
}

module.exports = {getAllBooks, getSingleBookById, addBook, updateBook, deleteBook}