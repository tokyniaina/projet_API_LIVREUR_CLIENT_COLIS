const { LivreurStatu } = require("../../db/sequelize");


module.exports = (app) => {
  app.get("/api/livreurstatu", (req, res) => {
    LivreurStatu.findAll({ order: ["name"] })
      .then((livstatu) => {
        const message = "La liste des lieus a bien été récupérée.";
        res.json({ message, data: livstatu });
      })
      .catch((error) => {
        const message = `La liste des lieus n'a pas pu récuper , Réessayer dans quelque instant`;
        res.status(500).json({ message, data: error });
      });
  });
};
