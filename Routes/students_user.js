const express = require('express');
const router = express.Router();
const { signUp, Login } = require("../Controllers/students_controller");


router.post('/register', signUp);
router.post('/login', Login);

module.exports = router;