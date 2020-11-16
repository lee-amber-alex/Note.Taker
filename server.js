const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const savedNotes = require("./app/db/db.json");
const port = process.env.Port || 8080;


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



app.listen(port, function(){
    console.log("App listening on port" + port)
});