const express = require('express');
const env = require('./config/env');

// import routes
const projectRoutes = require('./routes/routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = env.PORT || 3000;
const HOST = env.HOST || 'localhost';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
app.use('/api/projects', projectRoutes); // routes for projects

// error handling middleware
app.use(errorHandler)

// start server
app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
})