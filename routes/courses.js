const express = require("express");
const router = express.Router();

const CourseController = require("../controllers/CourseController");
const isAuthenticated = require("../middlewares").isAuthenticated;

router.post("/join", isAuthenticated, CourseController.joinCourse);
router.post("/accept", isAuthenticated, CourseController.acceptCourse);

module.exports = router;
