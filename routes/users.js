const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const isAuthenticated = require('../middlewares').isAuthenticated

router
  .route("/:id")
  .get(UserController.getUserById)
  .delete(UserController.deleteUserById)
  .put(UserController.updateUserById);

router.get("/", isAuthenticated ,UserController.getUser);
router.post("/login", UserController.loginUser);
router.post("/signup", UserController.signupUser);

module.exports = router;
