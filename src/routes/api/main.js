const express = require('express');
const mainController = require('../../controllers/api/main');

const router = express.Router();

router.get('/books', mainController.listBooks);

router.get('/authors', mainController.listAuthors);

module.exports = router;