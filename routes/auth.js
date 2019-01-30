const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')

router.post("/login", AuthController.loginUser);
router.post("/signup", AuthController.signupUser);

module.exports = router