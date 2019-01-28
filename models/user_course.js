"use strict";
module.exports = (sequelize, DataTypes) => {
  const user_course = sequelize.define(
    "user_course",
    {
      id_user: { type: DataTypes.INTEGER, allowNull: false },
      id_course: {type: DataTypes.INTEGER, allowNull: false}
    },
    {}
  );
  user_course.associate = function(models) {
    // associations can be defined here
  };
  return user_course;
};
