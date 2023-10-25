const { Lieu } = require("../../db/sequelize");


module.exports = (app) => {
  app.get("/api/lieus", (req, res) => {
    Lieu.findAll({ order: ["name"] })
      .then((lieu) => {
        const message = "La liste des lieus a bien été récupérée.";
        res.json({ message, data: lieu });
      })
      .catch((error) => {
        const message = `La liste des lieus n'a pas pu récuper , Réessayer dans quelque instant`;
        res.status(500).json({ message, data: error });
      });
  });
};
