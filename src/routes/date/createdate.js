const { ValidationError, UniqueConstraintError } = require("sequelize");
const { Date } = require("../../db/sequelize");


module.exports = (app) => {
  app.post("/api/date", (req, res) => {
    Date.create(req.body)
      .then((date) => {
        const message = `Le date ${req.body.heure} est ajouter au date`;
        res.json({ message, data: date });
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
