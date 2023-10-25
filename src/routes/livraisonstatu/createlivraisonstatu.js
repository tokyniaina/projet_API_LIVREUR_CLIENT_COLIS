const { ValidationError, UniqueConstraintError } = require("sequelize");
const { LivreurStatu } = require("../../db/sequelize");


module.exports = (app) => {
  app.post("/api/livreurstatu", (req, res) => {
    LivreurStatu.create(req.body)
      .then((livstatu) => {
        const message = `Le prix ${req.body.prix_service} est ajouter au lieu`;
        res.json({ message, data: livstatu });
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
