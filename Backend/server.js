const express = require("express");
const cors = require("cors");
var timeout = require('connect-timeout'); //express v4
const app = express();
const config = require("./app/config/index");

var corsOptions = {
  origin: '*'
};


app.use(express.static('public'));

app.use(cors(corsOptions));

app.use(timeout(120000));
app.use(haltOnTimedout);
function haltOnTimedout(req, res, next){
  if (!req.timedout) next();
}

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to nft application." });
});

require("./app/routes/nft.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || config.expressPort;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
