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
    models.course.hasMany(models.course_schedule, {
      foreignKey: "id_course",
      sourceKey: "id"
    });
    models.course.hasMany(models.user_course, {
      foreignKey: "id_course",
      sourceKey: "id"
    });
    models.course.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: "id_coach",
      targetKey: "id"
    });
  };
  return course;
};
