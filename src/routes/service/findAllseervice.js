const { Service } = require("../../db/sequelize");


module.exports = (app) => {
  app.get("/api/services", (req, res) => {
    Service.findAll({ order: ["name"] })
      .then((service) => {
        const message = "La liste des colis a bien été récupérée.";
        res.json({ message, data: service });
      })
      .catch((error) => {
        const message = `La liste des colis n'a pas pu récuper , Réessayer dans quelque instant`;
        res.status(500).json({ message, data: error });
      });
  });
};
