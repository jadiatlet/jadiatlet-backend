"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
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
  user.associate = function(models) {
    models.user.hasMany(models.coach_achievement, {
      foreignKey: "id_coach",
      sourceKey: "id"
    });
    models.user.hasMany(models.coach_experience, {
      foreignKey: "id_coach",
      sourceKey: "id"
    });
  };
  return user;
};
