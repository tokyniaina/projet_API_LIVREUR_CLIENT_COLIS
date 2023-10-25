const { ValidationError, UniqueConstraintError } = require("sequelize");
const { User } = require("../../db/sequelize");


module.exports = (app) => {
  app.post("/api/user", (req, res) => {
    User.create(req.body)
      .then((util) => {
        const message = `L'utilisateur ${req.body.name} est ajouter au utilisateur`;
        res.json({ message, data: util });
      })
      .catch((error) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        if (error instanceof UniqueConstraintError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        const message = `Lèutilisateur n'a pas pu creer, Réessayer dans quelque instant`;
        res.statuts(500).json({ message, data: error });
      });
  });
};
