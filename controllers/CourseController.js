const User = require("../models").user;
const Course = require("../models").course;
const UserCourse = require("../models").user_course;

exports.getAllCourse = async (req, res) => {
  try {
    const allCourse = await Course.findAll();
    res.status(200).json({ allCourse });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.createCourse = async (req, res) => {
  try {
    const userId = req.params.id;
    const newCourse = await Course.create(
      {
        ...req.body,
        id_coach: userId
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

// -------------------------- Join and Accept --------------------------------

exports.joinCourse = async (req, res) => {
  try {
    const role = req.user.user_type;
    if (role === "Student") {
      const userCourse = await UserCourse.create({
        ...req.body,
        id_user: req.user.id
      });

      res.status(200).json({ userCourse });
    } else {
      res.status(500).json("You're NOT Student");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.acceptCourse = async (req, res) => {
  try {
    const role = req.user.user_type;
    console.log(role);

    if (role === "Coach") {
      await UserCourse.update(
        { status: req.body.status },
        { where: { id: req.body.id } }
      );

      const course = await UserCourse.findAll();

      res.status(200).json({ course });
    } else {
      res.status(500).json("You're NOT Coach");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllCourse = async (req, res) => {
  try {
    const course = await UserCourse.findAll();
    res.status(200).json({ course });
  } catch (error) {
    res.status(500).json(error);
  }
};
