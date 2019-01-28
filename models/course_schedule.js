"use strict";
module.exports = (sequelize, DataTypes) => {
  const course_schedule = sequelize.define(
    "course_schedule",
    {
      id_course: { type: DataTypes.INTEGER, allowNull: false },
      day: { type: DataTypes.DATE, allowNull: false },
      start_hour: { type: DataTypes.DATE, allowNull: false },
      end_hour: { type: DataTypes.DATE, allowNull: false },
      venue: { type: DataTypes.STRING, allowNull: false }
    },
    {}
  );
  course_schedule.associate = function(models) {
    // associations can be defined here
  };
  return course_schedule;
};
