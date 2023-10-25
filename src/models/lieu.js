const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "Lieu",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      depar: {
        type: DataTypes.STRING,
      },
      arrivee: {
        type: DataTypes.STRING,
      },
      cordonee_depar: {
        type: DataTypes.INTEGER,
      },cordonee_arrivee: {
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
