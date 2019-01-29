const express = require("express");
const router = express.Router();

const CourseController = require("../controllers/CourseController");

router
  .route("/")
  .get(CourseController.getCourse)
  .post(CourseController.createCourse);

router
  .route("/schedule")
  .get(CourseController.getSchedule)
  .post(CourseController.createSchedule);
module.exports = router;
