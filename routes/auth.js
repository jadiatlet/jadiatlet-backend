const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/AuthController");
const isAuthenticated = require("../middlewares/");

router.post("/login", AuthController.loginUser);
router.post("/signup", AuthController.signupUser);
router.get("/verify", isAuthenticated, AuthController.verifyToken);

module.exports = router;
