const User = require("../models").user;
const coachAchievement = require("../models").coach_achievement;
const coachExperience = require("../models").coach_experience;
const Course = require("../models").course;
const UserCourse = require("../models").user_course;

//--------------------------- CRUD for User ---------------------------
exports.getUser = async (req, res) => {
  if (req.query) {
    let condition = {};

    Object.keys(req.query).forEach(key =>
      Object.assign(condition, {
        [key]: { $like: `%${req.query[key]}%` }
      })
    );

    User.findAll({
      where: { ...condition },
      include: [
        coachAchievement,
        coachExperience,
        {
          model: Course,
          include: [UserCourse]
        }
      ]
    })
      .then(users => res.status(200).json({ users }))
      .catch(err => res.status(500).json(err));
  } else {
    User.findAll()
      .then(users => res.status(200).json({ users }))
      .catch(err => res.status(500).json(err));
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateUserById = async (req, res) => {
  try {
    await User.update(req.body, { where: { id: req.params.id } });
    const user = await User.findById(req.params.id);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json(error);
  }
};

//--------------------------- CRUD for Coach Achievement ---------------------------

exports.getAchievement = async (req, res) => {
  try {
    const achievement = await coachAchievement.findAll(
      { where: { id_coach: req.params.id } },
      { include: [User] }
    );

    res.status(200).json({ achievement });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAchievementById = async (req, res) => {
  try {
    const achievement = await coachAchievement.findAll(
      { where: { id: req.params.achievement_id, id_coach: req.params.id } },
      { include: [User] }
    );
    res.status(200).json({ achievement });
  } catch (error) {
    res.statu(500).json(error);
  }
};

exports.createAchievement = async (req, res) => {
  try {
    const role = req.user.user_type;

    console.log(role);

    if (role === "Coach") {
      const newAchievement = await coachAchievement.create(
        {
          title: req.body.title,
          years: req.body.years,
          id_coach: parseInt(req.params.id)
        },
        {
          include: [User]
        }
      );
      res.status(200).json({ newAchievement });
    } else {
      res.status(200).json("You're NOT Coach");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateAchievementById = async (req, res) => {
  try {
    await coachAchievement.update(
      req.body,
      {
        where: { id: req.params.achievement_id, id_coach: req.params.id }
      },
      {
        include: [User]
      }
    );
    const updated = await coachAchievement.findAll({
      where: { id: req.params.achievement_id }
    });
    res.status(200).json({ updated });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteAchievementById = async (req, res) => {
  try {
    await coachAchievement.destroy({
      where: { id: req.params.achievement_id, id_coach: req.params.id }
    });
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

//--------------------------- CRUD for Coach Experience ---------------------------

exports.createExperience = async (req, res) => {
  try {
    const role = req.user.user_type;
    if (role === "Coach") {
      const experience = await coachExperience.create(
        {
          title: req.body.title,
          start_date: req.body.start_date,
          end_date: req.body.end_date,
          id_coach: parseInt(req.params.id)
        },
        {
          include: [User]
        }
      );

      res.status(200).json({ experience });
    } else {
      res.status(200).json("You're NOT Coach");
    }
  } catch (error) {
    res.statu(500).json(error);
  }
};

exports.getExperience = async (req, res) => {
  try {
    const experience = await coachExperience.findAll(
      { where: { id_coach: req.params.id } },
      { include: [User] }
    );

    res.status(200).json({ experience });
  } catch (error) {
    res.statu(500).json(error);
  }
};

exports.getExperienceById = async (req, res) => {
  try {
    const experience = await coachExperience.findAll(
      { where: { id: req.params.experience_id, id_coach: req.params.id } },
      { include: [User] }
    );
    res.status(200).json({ experience });
  } catch (error) {
    res.statu(500).json(error);
  }
};

exports.updateExperienceById = async (req, res) => {
  try {
    await coachExperience.update(req.body, {
      where: { id: req.params.experience_id, id_coach: req.params.id }
    });
    const updated = await coachExperience.findAll({
      where: { id: req.params.experience_id }
    });
    res.status(200).json({ updated });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteExperienceById = async (req, res) => {
  try {
    await coachExperience.destroy({
      where: { id: req.params.experience_id, id_coach: req.params.id }
    });
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
