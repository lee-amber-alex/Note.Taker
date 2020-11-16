const savedNotes = require("../db/db.json");
const path = require("path");


module.exports = function (app) {

  app.get("/api/notes", function (req, res) {
    return res.json(savedNotes);
  });
};

// app.post("/api/notes", function(req, res) {
// // convert db.json into an array, then push new not into the array
// // 
    
//   });