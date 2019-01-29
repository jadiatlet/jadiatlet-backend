const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

router
  .route("/:id")
  .delete(UserController.deleteUserById)
  .put(UserController.updateUserById);

router.get("/", UserController.getUser);
router.post("/login", UserController.loginUser);
router.post("/signup", UserController.signupUser);

module.exports = router;
