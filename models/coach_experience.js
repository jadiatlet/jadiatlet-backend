"use strict";
module.exports = (sequelize, DataTypes) => {
  const coach_experience = sequelize.define(
    "coach_experience",
    {
      title: {type: DataTypes.STRING, allowNull: true, defaultValue: null },
      start_date: {type: DataTypes.DATE, allowNull: true, defaultValue: null },
      end_date: {type: DataTypes.DATE, allowNull: true, defaultValue: null },
      id_coach: {type: DataTypes.INTEGER, allowNull: true, defaultValue: null }
    },
    {}
  );
  coach_experience.associate = function(models) {
    // associations can be defined here
  };
  return coach_experience;
};
