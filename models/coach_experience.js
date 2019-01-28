"use strict";
module.exports = (sequelize, DataTypes) => {
  const coach_experience = sequelize.define(
    "coach_experience",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      start_date: { type: DataTypes.DATE, allowNull: false },
      end_date: { type: DataTypes.DATE, allowNull: false },
      id_coach: { type: DataTypes.INTEGER, allowNull: false }
    },
    {}
  );
  coach_experience.associate = function(models) {
    // associations can be defined here
  };
  return coach_experience;
};
