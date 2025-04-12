const express = require('express');
const router = express.Router();

const verifyToken  = require('../middlewares/authentication'); // import authentication middleware

// import project controller
const {
    viewProject,
    updateProject,
} = require('../controllers/projectController');

// routes to view projects
router.get('/:id', verifyToken, viewProject); // view project by id
router.put('/:id', verifyToken, updateProject); // update project by id

module.exports = router;