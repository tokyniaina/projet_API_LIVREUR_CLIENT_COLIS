const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numTel: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mail: {
        type: DataTypes.STRING,
      },
      job: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return this.getDataValue("job".split(","));
        },
        set(job) {
          this.setDataValue("job", job.join());
        },
      },
      transport: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("transport".split(","));
        },
        set(transport) {
          this.setDataValue("transport", transport.join());
        },
      },
      passsword:{
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      timestamps: true,
      createdAt: "created",
      updatedAt: false,
    }
  );
};
