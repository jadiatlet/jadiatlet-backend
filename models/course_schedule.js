"use strict";
module.exports = (sequelize, DataTypes) => {
  const course_schedule = sequelize.define(
    "course_schedule",
    {
      day: {
        type: DataTypes.ENUM(),
        values: [
          "Senin",
          "Selasa",
          "Rabu",
          "Kamis",
          "Jumat",
          "Sabtu ",
          "Minggu"
        ],
        allowNull: false
      },
      start_hour: { type: DataTypes.DATE, allowNull: false },
      end_hour: { type: DataTypes.DATE, allowNull: false },
      venue: { type: DataTypes.STRING, allowNull: false }
    },
    {}
  );
  course_schedule.associate = function(models) {
    models.course_schedule.belongsTo(models.course, {
      onDelete: "CASCADE",
      foreignKey: "id_course",
      targetKey: "id"
    });
  };
  return course_schedule;
};
