const jwt = require("jsonwebtoken");
const User = require("../models").users;

exports.isAuthenticated = async (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (token === undefined) {
    return res.json("token NOT found !");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ where: { id: decoded.id } });

    if (user === null) {
      return res.json("User NOT found !");
    }

    req.user = user;
    next();
  } catch (error) {
    res.json(error);
  }
};
