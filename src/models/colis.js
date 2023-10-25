const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "Colis",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
      },
      niveau: {
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
