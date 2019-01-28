"use strict";
module.exports = (sequelize, DataTypes) => {
  const course = sequelize.define(
    "course",
    {
      id_coach: { type: DataTypes.INTEGER, allowNull: false },
      start_date: {type: DataTypes.DATE, allowNull: false},
      end_date: {type: DataTypes.DATE, allowNull: false},
      description: {type:DataTypes.TEXT, allowNull: true}
    },
    {}
  );
  course.associate = function(models) {
    // associations can be defined here
  };
  return course;
};
