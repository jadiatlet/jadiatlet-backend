const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

router
  .route("/")
  .get(UserController.getUser)
  .post(UserController.createUser);

router
  .route("/:id")
  .delete(UserController.deleteUserById)
  .put(UserController.updateUserById);

router.post("/login", UserController.loginUser)

module.exports = router;
