const Course = require("../models").course;
const Schedule = require("../models").course_schedule;

exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findAll();
    res.status(200).json({ course });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.createCourse = async (req, res) => {
  try {
    const userId = req.user.id;
    const newCourse = await Course.create({
      id_coach: userId,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      description: req.body.description
    });
    res.status(200).json({ newCourse });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteCourseById = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.course_id } });
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findAll(
      { where: { id_course: req.params.course_id } },
      { include: [Course] }
    );
    res.status(200).json({ schedule });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.createSchedule = async (req, res) => {
  try {
    const newSchedule = await Schedule.create({
      ...req.body,
      id_course: req.params.id
    });
    res.status(200).json({ newSchedule });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteScheduleById = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.schedule_id } });
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getScheduleById = async (req, res) => {
  try {
    const schedule = await User.findAll({
      where: { id: req.params.schedule_id }
    });
    res.status(200).json({ schedule });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateScheduleById = async (req, res) => {
  try {
    await Schedule.update(
      { ...req.body, course_id: req.params.course_id },
      {
        where: { id: req.params.experience_id }
      }
    );
    const updated = await coachExperience.findAll({
      where: { id: req.params.experience_id }
    });
    res.status(200).json({ updated });
  } catch (error) {
    res.status(500).json(error);
  }
};
