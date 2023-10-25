const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "Date",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      heure: {
        type: DataTypes.INTEGER,
      },
      jour: {
        type: DataTypes.INTEGER,
      },
      mois: {
        type: DataTypes.INTEGER,
      }
    },
    {
      timestamps: true,
      createdAt: "created",
      updatedAt: false,
    }
  );
};
