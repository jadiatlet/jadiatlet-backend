const User = require("../models").users;
const coachAchievement = require("../models").coach_achievement;
const coachExperience = require("../models").coach_experience;

exports.getUser = async (req, res) => {
  User.findAll()
    .then(users => res.json({ users }))
    .catch(err => res.json(err));
};

exports.createUser = async (req, res) => {
  try {
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
   const update = await User.update(
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
