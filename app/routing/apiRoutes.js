const savedNotes = require("../db/db.json");
const path = require("path");


module.exports = function (app) {

  app.get("/api/notes", function (req, res) {
    return res.JSON.parse(dbjson);
  });
};

app.post("/api/notes", function(req, res) {
res.send(savedNotes);

    
  });