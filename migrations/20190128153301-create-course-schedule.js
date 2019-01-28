"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("course_schedules", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_course: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      day: {
        type: Sequelize.DATE,
        allowNull: false
      },
      start_hour: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_hour: {
        type: Sequelize.DATE,
        allowNull: false
      },
      venue: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("course_schedules");
  }
};
