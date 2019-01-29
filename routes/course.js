const express = require("express");
const router = express.Router();

const CourseController = require("../controllers/CourseController");
const isAuthenticated = require("../middlewares").isAuthenticated;

router
  .route("/")
  .get(CourseController.getCourse)
  .post(isAuthenticated, CourseController.createCourse);

router
  .route("/schedule")
  .get(isAuthenticated, CourseController.getSchedule)
  .post(CourseController.createSchedule);
module.exports = router;
