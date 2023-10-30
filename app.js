const express = require("express");
const morgan = require("morgan");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const sequelize = require("./src/db/sequelize");
const cors = require("cors")

const app = express();
const port = 3000;

app
  .use(favicon(__dirname + "/favicon.ico"))
  .use(morgan("dev"))
  .use(bodyParser.json())
  .use(cors())

sequelize.initDb();
app.get ('/', (req, res) => {
  res.json('Hello, 😋')
})

//ici nous place nos future points de terminaison
//user
require("./src/routes/user/createUser")(app);
require("./src/routes/user/findAllUser")(app);
require("./src/routes/user/deleteUser")(app);
//colis
require("./src/routes/colis/createcolis")(app);
require("./src/routes/colis/findAllcolis")(app);
require("./src/routes/colis/deletecolis")(app);
//date
require("./src/routes/date/createdate")(app);
require("./src/routes/date/findAlldate")(app);
require("./src/routes/date/deletedate")(app);
//Lieu
require("./src/routes/lieu/createlieu")(app);
require("./src/routes/lieu/findAlllieu")(app);
require("./src/routes/lieu/deletelieu")(app);
//livraisonState
require("./src/routes/livraisonstatu/createlivraisonstatu")(app);
require("./src/routes/livraisonstatu/findAlllivraisonstatu")(app);
require("./src/routes/livraisonstatu/deletelivraisonstatu")(app);
//service
require("./src/routes/service/createservice")(app);
require("./src/routes/service/findAllseervice")(app);
require("./src/routes/service/deleteservice")(app);
//course

//On ajout les gestion des erreur 404
app.use(({ res }) => {
  const message = `Impossible de trouver la resourve demander ! vous pouver essayer une autre URL`;
  res.status(404).json({ message });
});

app.listen(port, () => {
  console.log(
    `Notre application node est démaré sur : http://localhost:${port}`
  )
});
