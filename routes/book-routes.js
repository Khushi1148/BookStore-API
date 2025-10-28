const express = require('express');
const {getAllBooks, getSingleBookById, addBook, updateBook, deleteBook} = require('../controllers/book-controller')
// create express router
const router = express.Router()

// all the routes related to Books only
router.get('/all', getAllBooks);
router.get('/all/:id', getSingleBookById);
router.post('/add', addBook);
router.put('/update/:id', updateBook);
router.delete('/delete/:id', deleteBook);


module.exports = router;