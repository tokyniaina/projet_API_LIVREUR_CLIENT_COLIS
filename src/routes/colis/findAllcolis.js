const { Colis } = require("../../db/sequelize");


module.exports = (app) => {
  app.get("/api/colis", (req, res) => {
    Colis.findAll({ order: ["name"] })
      .then((coli) => {
        const message = "La liste des colis a bien été récupérée.";
        res.json({ message, data: coli });
      })
      .catch((error) => {
        const message = `La liste des colis n'a pas pu récuper , Réessayer dans quelque instant`;
        res.status(500).json({ message, data: error });
      });
  });
};
