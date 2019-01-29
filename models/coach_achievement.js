"use strict";
module.exports = (sequelize, DataTypes) => {
  const coach_achievement = sequelize.define(
    "coach_achievement",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      years: { type: DataTypes.DATE, allowNull: false },
      id_coach: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: { model: "users", key: "id" }
      }
    },
    {}
  );
  coach_achievement.associate = function(models) {
      models.coach_achievement.hasOne(models.users, {
        foreignKey: "id_coach",
        targetKey: "id"
      })
  };
  return coach_achievement;
};
