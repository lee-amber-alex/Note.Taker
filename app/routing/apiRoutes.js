const dbjson = require("../db/db.json");



module.exports = function (app) {

  app.get("/api/notes", function (req, res) {
    return res.json(dbjson);
  });
};
