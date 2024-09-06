require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// enable CORS
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Import the API routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

module.exports = app;