"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      first_name: { type: DataTypes.STRING, allowNull: false },
      last_name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: true },
      city: { type: DataTypes.STRING, allowNull: true },
      overview: { type: DataTypes.STRING, allowNull: true },
      user_type: { type: DataTypes.ENUM("Coach", "Student"), allowNull: false },
      sport: { type: DataTypes.STRING, allowNull: true },
      phone: { type: DataTypes.STRING, allowNull: true }
    },
    {}
  );
  users.associate = function(models) {};
  return users;
};
