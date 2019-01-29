const Course = require("../models").course;
const Schedule = require("../models").course_schedule;

exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findAll();
    res.json({ course });
  } catch (error) {
    res.json(error);
  }
};

exports.createCourse = async (req, res) => {
  try {
    const newCourse = await Course.create(req.body);
    res.json({ newCourse });
  } catch (error) {
    res.json(error);
  }
};

exports.getSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findAll();
    res.json({ schedule });
  } catch (error) {
    res.json(error);
  }
};

exports.createSchedule = async (req, res) => {
  try {
    const newSchedule = await Schedule.create(req.body);
    res.json({ newSchedule });
  } catch (error) {
    res.json(error);
  }
};
