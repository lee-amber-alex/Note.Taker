const savedNotes = require("../db/db.json");
const path = require("path");
const fs = require("fs");
const nanoID = require("nanoid").nanoid;
console.log(savedNotes);
module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    return res.json(savedNotes);
  });

  app.post("/api/notes", function (req, res) {
    const tempDB = savedNotes;
    // convert db.json into an array, then push new not into the array
    const newNote = {
      id: nanoID(),
      ...req.body,
    };
    tempDB.push(newNote);
    fs.writeFile("app/db/db.json", JSON.stringify(tempDB), function () {
      res.json(tempDB);
    });
  });
  app.delete("/api/notes/:id", function (req, res) {
    const tempDB = savedNotes;

    const deleteIndex = tempDB.findIndex(
      (element) => element.id === req.params.id
    );

    tempDB.splice(deleteIndex, 1);

    fs.writeFile("app/db/db.json", JSON.stringify(tempDB), function () {
      res.json(tempDB);
    });
  });
};
