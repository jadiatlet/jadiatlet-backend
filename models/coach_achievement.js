"use strict";
module.exports = (sequelize, DataTypes) => {
  const coach_achievement = sequelize.define(
    "coach_achievement",
    {
      title: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
      years: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
      id_coach: {
        type: DataTypes.INTEGER,
        allowNull: true,
        reference: { model: "users", key: "id" },
        defaultValue: null
      }
    },
    {}
  );
  coach_achievement.associate = function(models) {
    models.coach_achievement.hasOne(models.users, {
      foreignKey: "id",
      targetKey: "id_coach"
    });
  };
  return coach_achievement;
};
