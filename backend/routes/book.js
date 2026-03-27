const express = require('express');
const router = express.Router();
const stuffController = require('../controllers/book');

// CRUD
router.post('/', stuffController.createBook);
router.put('/:id', stuffController.modifyBook);
router.delete('/:id', stuffController.deleteBook);
router.get('/:id', stuffController.getOneBook);
router.get('/', stuffController.getAllBook);

module.exports = router;