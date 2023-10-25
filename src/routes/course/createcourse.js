const { ValidationError, UniqueConstraintError } = require("sequelize");
const { Course } = require("../../db/sequelize");


module.exports = (app) => {
  app.post("/api/course", (req, res) => {
    Course.create(req.body)
      .then((course) => {
        const message = `Le course ${req.body.description} est ajouter au course`;
        res.json({ message, data: course });
      })
      .catch((error) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        if (error instanceof UniqueConstraintError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        const message = `le course n'a pas pu creer, Réessayer dans quelque instant`;
        res.statuts(500).json({ message, data: error });
      });
  });
};
