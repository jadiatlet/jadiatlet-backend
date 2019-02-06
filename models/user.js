"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      first_name: { type: DataTypes.STRING, allowNull: false },
      last_name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false , unique : true },
      password: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: true },
      profile_picture : DataTypes.STRING,
      city: { type: DataTypes.STRING, allowNull: true },
      overview: { type: DataTypes.STRING, allowNull: true },
      user_type: { type: DataTypes.ENUM("Coach", "Student"), allowNull: false },
      sport: { type: DataTypes.STRING, allowNull: true },
      phone: { type: DataTypes.STRING, allowNull: true , unique : true }
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
    models.user.hasMany(models.course, {
      foreignKey: "id_coach",
      sourceKey: "id"
    });
    models.user.hasMany(models.user_course, {
      foreignKey: "id_user",
      sourceKey: "id"
    });
  };
  return user;
};
