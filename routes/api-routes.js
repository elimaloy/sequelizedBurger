
//  models
var db = require("../models");

// Routes

module.exports = function(app) {

  // GET route for getting burgers
  app.get("/", function(req, res) {
    db.burgers.findAll({}).then(function(data) {
        var burgerObject = {
            burgers:data
        };
        res.render("index", burgerObject);
    });
  });

  // POST route for saving
  app.post("/", function(req, res) {
    db.burgers.create({
        burger_name: req.body.name
    }).then(function() {
        res.redirect("/");
    });
  });

  // PUT route for updating burgers. 
  app.put("/update/:id", function(req, res) {
   console.log("backend")
    db.burgers.update({
        devoured: true
    },
    {
        where: {
            id: req.params.id
        }
    }).then(function() {
       console.log("redirect")
        res.json("/");
    });
  });

  // DELETE route for deleting burgers.
  app.delete("/:id", function(req, res) {
    db.burgers.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(data) {
        res.json("/");
    });
  });

};