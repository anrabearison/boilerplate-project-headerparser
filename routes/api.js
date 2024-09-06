const express = require('express');
const router = express.Router();
const parseHeaders = require('../services/headerService');

// Route for header parsing
router.get('/whoami', (req, res) => {
    res.json(parseHeaders(req));
});

module.exports = router;