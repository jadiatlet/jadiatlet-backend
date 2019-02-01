"use strict";
module.exports = (sequelize, DataTypes) => {
  const user_course = sequelize.define(
    "user_course",
    {
      id_user: { type: DataTypes.INTEGER, allowNull: false },
      id_course: {type: DataTypes.INTEGER, allowNull: false},
      status : DataTypes.BOOLEAN
    },
    {}
  );
  user_course.associate = function(models) {
    models.user_course.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: "id_user",
      targetKey: "id"
    });
    models.user_course.belongsTo(models.course, {
      onDelete: "CASCADE",
      foreignKey: "id_course",
      targetKey: "id"
    });
  };
  return user_course;
};
