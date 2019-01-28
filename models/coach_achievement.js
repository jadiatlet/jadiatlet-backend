"use strict";
module.exports = (sequelize, DataTypes) => {
  const coach_achievement = sequelize.define(
    "coach_achievement",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      years: { type: DataTypes.DATE, allowNull: false },
      id_coach: { type: DataTypes.INTEGER, allowNull: false }
    },
    {}
  );
  coach_achievement.associate = function(models) {
    // associations can be defined here
  };
  return coach_achievement;
};
