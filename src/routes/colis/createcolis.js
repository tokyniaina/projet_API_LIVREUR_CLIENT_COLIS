const { ValidationError, UniqueConstraintError } = require("sequelize");
const { Colis } = require("../../db/sequelize");


module.exports = (app) => {
  app.post("/api/coli", (req, res) => {
    Colis.create(req.body)
      .then((coli) => {
        const message = `Le coli ${req.body.name} est ajouter au coli`;
        res.json({ message, data: coli });
      })
      .catch((error) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        if (error instanceof UniqueConstraintError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        const message = `le coli n'a pas pu creer, Réessayer dans quelque instant`;
        res.statuts(500).json({ message, data: error });
      });
  });
};
