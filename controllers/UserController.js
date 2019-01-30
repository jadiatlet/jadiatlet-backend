const User = require("../models").user;
const coachAchievement = require("../models").coach_achievement;
const coachExperience = require("../models").coach_experience;

exports.getUser = async (req, res) => {
  User.findAll()
    .then(users => res.json({ users }))
    .catch(err => res.json(err));
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json({ user });
  } catch (error) {
    res.json(error);
  }
};

exports.createAchievement = async (req, res) => {
  try {
    const newAchievement = await coachAchievement.create({
      title: req.body.title,
      years: req.body.years,
      id_coach: req.params.id
    });

    res.status(200).json({ newAchievement });
  } catch (error) {
    res.status(400).json(error);
  }
};

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

exports.deleteUserById = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    res.json("Deleted");
  } catch (err) {
    res.json(err);
  }
};

exports.updateUserById = async (req, res) => {
  try {
    await User.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: req.body.address,
        city: req.body.city,
        overview: req.body.address,
        sport: req.body.sport,
        phone: req.body.phone
      },
      { where: { id: req.params.id } }
    );
    const user = await User.findById(req.params.id);
    res.json({ user });
  } catch (error) {
    res.json(error);
  }
};
