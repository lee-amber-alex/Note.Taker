const express = require("express");
const app = express();
const path = require("path");
const savedNotes = require("./app/db/db.json");
const port = process.env.PORT || 8080;




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



app.listen(port, function(){
    console.log("App listening on port " + port)
});