const express = require('express');
const env = require('./config/env');

const app = express();
const PORT = env.PORT || 3000;
const HOST = env.HOST || 'localhost';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes


// error handling middleware


// start server
app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${POST}`);
})