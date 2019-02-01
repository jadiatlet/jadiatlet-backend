const User = require("../models").user;
const Course = require("../models").course;
const Schedule = require("../models").course_schedule;

exports.createCourse = async (req, res) => {
  try {
    const userId = req.params.id;
    const newCourse = await Course.create(
      {
        id_coach: userId,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        description: req.body.description
      },
      {
        include: [User]
      }
    );
    res.status(200).json({ newCourse });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findAll({ where: { id_coach: req.params.id } });
    res.status(200).json({ course });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findAll(
      {
        where: { id: req.params.course_id, id_coach: req.params.id }
      },
      {
        include: [User]
      }
    );
    res.status(200).json({ course });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteCourseById = async (req, res) => {
  try {
    await Course.destroy({
      where: { id: req.params.course_id, id_coach: req.params.id }
    });
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateCourseById = async (req, res) => {
  try {
    await Course.update(req.body, {
      where: { id: req.params.course_id, id_coach: req.params.id }
    });
    const updated = await Course.findAll({
      where: { id: req.params.course_id }
    });
    res.status(200).json({ updated });
  } catch (error) {
    res.status(500).json(error);
  }
};

// -------------------------- Schedule --------------------------------

exports.createSchedule = async (req, res) => {
  try {
    const day = req.body.day.toLowerCase()
    const newSchedule = await Schedule.create(
      {
        ...req.body,
        id_course: req.params.course_id,
        day : day
      },
      {
        include: [Course]
      }
    );
    res.status(200).json({ newSchedule });
  } catch (error) {
    res.status(500).json(error);
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

exports.getScheduleById = async (req, res) => {
  try {
    const schedule = await User.findAll(
      {
        where: { id: req.params.schedule_id, id_course: req.params.course_id }
      },
      {
        include: [Course]
      }
    );
    res.status(200).json({ schedule });
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.deleteScheduleById = async (req, res) => {
  try {
    await Schedule.destroy({
      where: { id: req.params.schedule_id, id_course: req.params.course_id }
    });
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateScheduleById = async (req, res) => {
  try {
    await Schedule.update(req.body, {
      where: {id: req.params.schedule_id, id_course: req.params.course_id }
    });
    const updated = await Schedule.findAll({
      where: { id: req.params.schedule_id }
    });
    res.status(200).json({ updated });
  } catch (error) {
    res.status(500).json(error);
  }
};
