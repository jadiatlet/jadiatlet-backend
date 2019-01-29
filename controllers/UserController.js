const User = require("../models").users;

exports.getUser = async (req, res) => {
  User.findAll()
    .then(users => res.json({ users }))
    .catch(err => res.json(err));
};

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.json({ user });
  } catch (err) {
    res.json(err);
  }
};
