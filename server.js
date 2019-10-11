// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
//var methodOverride = require("method-override");
var db = require("./models");

//Express 
var PORT = process.env.PORT || 3000;
var app = express();

//Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app
app.use(express.static("public"));

// Override with POST 
//app.use(methodOverride("_method"));

// Require Express-Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes

var connection = require("./config/config.json");
require("./routes/api-routes.js")(app);



db.sequelize.sync().then(function(){
  app.listen(PORT, function() {
    console.log("App listening on PORT: http://localhost:" + PORT);
  });
});