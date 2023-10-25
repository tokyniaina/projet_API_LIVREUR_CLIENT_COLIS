const { User } = require("../../db/sequelize");


module.exports = (app) => {
  app.get("/api/users", (req, res) => {
    User.findAll({ order: ["name"] })
      .then((user) => {
        const message = "La liste des utilisateur a bien été récupérée.";
        res.json({ message, data: user });
      })
      .catch((error) => {
        const message = `La liste des utilisateur n'a pas pu récuper , Réessayer dans quelque instant`;
        res.status(500).json({ message, data: error });
      });
  });
};
