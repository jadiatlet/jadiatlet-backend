"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      first_name: { type: DataTypes.STRING, allowNull: false },
      last_name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      password: {type: DataTypes.STRING, allowNull: false},
      address: { type: DataTypes.STRING, allowNull: false },
      city: {type: DataTypes.STRING, allowNull: false},
      overview: { type: DataTypes.STRING, allowNull: false },
      user_type: { type: DataTypes.ENUM("Coach", "Student"), allowNull: false },
      sport: { type: DataTypes.STRING, allowNull: false },
      phone: { type: DataTypes.INTEGER, allowNull: false }
    },
    {}
  );
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
