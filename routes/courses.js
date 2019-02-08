const express = require("express");
const router = express.Router();

const CourseController = require("../controllers/CourseController");
const isAuthenticated = require("../middlewares").isAuthenticated;

router.post("/join", isAuthenticated, CourseController.joinCourse);
router.put("/accept", isAuthenticated, CourseController.acceptCourse);
router.get("/getCourse", CourseController.getAllCourse);
router.get("/getCourse/:id_user", CourseController.getUserCourse)

module.exports = router;
