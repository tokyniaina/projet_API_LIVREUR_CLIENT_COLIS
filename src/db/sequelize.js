const { Sequelize, DataTypes } = require("sequelize");
const userdb = require("./userdb");
const userModel = require("../models/user");
const colisModel = require("../models/colis");
const courseModel = require("../models/course");
const lieuModel = require("../models/lieu");
const serviceModel = require("../models/service");
const dateModel = require("../models/date");
const livreurstatuModel = require("../models/livreurstatu");
const bcrypt = require("bcrypt");

const sequelize = new Sequelize("livraison_client_db", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  dialectOptions: {
    timezone: "Etc/GMT-2",
  },
  logging: false,
});

const User = userModel(sequelize, DataTypes);
const Service = serviceModel(sequelize, DataTypes);
const LivreurStatu = livreurstatuModel(sequelize, DataTypes);
const Lieu = lieuModel(sequelize, DataTypes);
const Date = dateModel(sequelize, DataTypes);
const Course = courseModel(sequelize, DataTypes);
const Colis = colisModel(sequelize, DataTypes);

const initDb = () => {
  return sequelize.sync({ force: true }).then((_) => {
    userdb.map((user) => {
      User.create({
          name: user.name,
          firstname: user.firstname,
          numTel: user.numTel,
          mail: user.mail,
          job: user.job,
          transport: user.transport,
          passsword: user.passsword,
        })
        .then((user) => console.log(user.toJSON()));
      console.log(user);
    });
    console.log("la base donne a été bien initialiser");
  });
};
module.exports = {
  initDb,
  User,
  Service,
  LivreurStatu,
  Lieu,
  Date,
  Course,
  Colis,
};
