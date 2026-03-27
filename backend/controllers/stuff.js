const express = require ('express');
const router = express.Router();

const stuffControler = require('../controllers/stuff');

router.post('/', stuffControler.createBook);
router.out('/:id', stuffControler.modifyBook);
router.delete('/:id', stuffControler.deleteBook);
router.get('/:id', stuffControler.getOneBook);
router.get('/', stuffControler.getAllBook);

module.exports = router