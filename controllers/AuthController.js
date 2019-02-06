const User = require("../models").user;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (user === null) {
      return res.status(400).json("Email NOT Found!");
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(400).json(`Password NOT Valid ! ${validPassword}`);
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.user_type },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    res
      .status(200)
      .json({ message: "You're logged in", name: user.first_name, token });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.signupUser = async (req, res) => {
  try {
    const SALT_WORK_FACTOR = 5;
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);

    req.body.password = await bcrypt.hash(req.body.password, salt);

    const userType = req.body.user_type.toLowerCase();

    const user = await User.create({ ...req.body, user_type: userType });

    res.status(200).json({ user });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.verifyToken = (req, res) => {
  res.status(200).json({ user: req.user });
};
