const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const CourseController = require("../controllers/CourseController");
const isAuthenticated = require("../middlewares").isAuthenticated;

router.get("/", isAuthenticated, UserController.getUser);

router
  .route("/:id")
  .get(UserController.getUserById)
  .delete(UserController.deleteUserById)
  .put(UserController.updateUserById);

router
  .route("/:id/achievement")
  .post(UserController.createAchievement)
  .get(UserController.getAchievement);

router
  .route("/:id/achievement/:achievement_id")
  .put(UserController.updateAchievementById)
  .get(UserController.getAchievementById)
  .delete(UserController.deleteAchievementById);

router
  .route("/:id/experience")
  .post(UserController.createExperience)
  .get(UserController.getExperience);

router
  .route("/:id/experience/:experience_id")
  .get(UserController.getExperienceById)
  .put(UserController.updateExperienceById)
  .delete(UserController.deleteExperienceById);

router
  .route("/:id/course/")
  .get(CourseController.getCourse)
  .post(isAuthenticated, CourseController.createCourse);

router
  .route("/:id/course/:course_id")
  .delete(CourseController.deleteCourseById)
  .get(CourseController.getCourseById)
  .put(CourseController.updateCourseById);

router
  .route("/:id/course/:course_id/schedule")
  .post(CourseController.createSchedule)
  .get(CourseController.getSchedule);

router
  .route("/:id/course/:course_id/schedule/:schedule_id")
  .delete(CourseController.deleteScheduleById)
  .get(CourseController.getScheduleById)
  .put(CourseController.updateScheduleById);

module.exports = router;
