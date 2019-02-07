"use strict";
module.exports = (sequelize, DataTypes) => {
  const coach_achievement = sequelize.define(
    "coach_achievement",
    {
      title: { type: DataTypes.STRING },
      years: { type: DataTypes.STRING }
    },
    {}
  );
  coach_achievement.associate = function(models) {
    models.coach_achievement.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: "id_coach",
      targetKey: "id"
    });
  };
  return coach_achievement;
};
