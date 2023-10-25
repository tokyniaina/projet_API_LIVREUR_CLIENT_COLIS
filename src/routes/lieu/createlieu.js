const { ValidationError, UniqueConstraintError } = require("sequelize");
const { Lieu } = require("../../db/sequelize");


module.exports = (app) => {
  app.post("/api/lieu", (req, res) => {
    Lieu.create(req.body)
      .then((lieu) => {
        const message = `Le lieu ${req.body.depar} jusqu'au ${req.body.arrivee} est ajouter au lieu`;
        res.json({ message, data: lieu });
      })
      .catch((error) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        if (error instanceof UniqueConstraintError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        const message = `le lieu n'a pas pu creer, Réessayer dans quelque instant`;
        res.statuts(500).json({ message, data: error });
      });
  });
};
