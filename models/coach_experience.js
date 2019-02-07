"use strict";
module.exports = (sequelize, DataTypes) => {
  const coach_experience = sequelize.define(
    "coach_experience",
    {
      title: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
      start_date: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
      end_date: { type: DataTypes.STRING, allowNull: true, defaultValue: null }
    },
    {}
  );
  coach_experience.associate = function(models) {
    models.coach_experience.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: "id_coach",
      targetKey: "id"
    });
  };
  return coach_experience;
};
