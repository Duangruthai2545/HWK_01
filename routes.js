const express = require('express');
const router = express.Router();
const exampleController = require('./controllers/exampleController');

router.post('/example', exampleController.handleExamplePost);

module.exports = router;
