const User = require("../models").users;
const coachAchievement = require("../models").coach_achievement;
const coachExperience = require("../models").coach_experience;

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getUser = async (req, res) => {
  User.findAll()
    .then(users => res.json({ users }))
    .catch(err => res.json(err));
};

exports.createUser = async (req, res) => {
  try {
    const SALT_WORK_FACTOR = 5;
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);

    req.body.password = await bcrypt.hash(req.body.password, salt);

    const user = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      city: req.body.city,
      overview: req.body.overview,
      user_type: req.body.user_type,
      sport: req.body.sport,
      phone: req.body.phone
    });

    const role = req.body.user_type;

    if (role.toLowerCase() === "coach") {
      await coachAchievement.create();
      await coachExperience.create();
      res.send("Sukses");
    } else {
      res.json({ user });
    }
  } catch (err) {
    res.json(err);
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

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (user === null) {
      return res.json("Email NOT Found!");
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.json(`Password NOT Valid ! ${validPassword}`);
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.user_type },
      "jadiatlet",
      { expiresIn: "7d" }
    );
    res.json({ message: "You're logged in", name: user.first_name, token });
  } catch (error) {
    res.json(error);
  }
};
