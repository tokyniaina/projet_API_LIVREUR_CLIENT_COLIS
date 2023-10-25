const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "LivreurStatu",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_servise: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      prix_service: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      confirl:{
        type:DataTypes.BOOLEAN,
      }
    },
    {
      timestamps: true,
      createdAt: "created",
      updatedAt: false,
    }
  );
};
