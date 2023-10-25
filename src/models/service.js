const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "Service",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_user: {
        type: DataTypes.INTEGER,
      },
      id_coli: {
        type: DataTypes.INTEGER,
      },
      id_course: {
        type: DataTypes.INTEGER,
      },
      id_date: {
        type: DataTypes.INTEGER,
      },
      id_lieu: {
        type: DataTypes.INTEGER,
      },
      prix: {
        type: DataTypes.INTEGER,
      },
      prix_list: {
        type: DataTypes.INTEGER,
      },
      confirm_prix:{
        type:DataTypes.BOOLEAN,
      },
      livree:{
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
