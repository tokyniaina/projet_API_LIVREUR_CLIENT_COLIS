const { ValidationError, UniqueConstraintError } = require("sequelize");
const { Service } = require("../../db/sequelize");


module.exports = (app) => {
  app.post("/api/service", (req, res) => {
    Service.create(req.body)
      .then((service) => {
        const message = `Le date ${req.body.prix} est ajouter au datee`;
        res.json({ message, data: service });
      })
      .catch((error) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        if (error instanceof UniqueConstraintError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        const message = `le date n'a pas pu creer, Réessayer dans quelque instant`;
        res.statuts(500).json({ message, data: error });
      });
  });
};
