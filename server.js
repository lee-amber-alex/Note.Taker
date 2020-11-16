const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.Port || 8080;


app.use(express.urlencoded({extedned: true}));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



app.listen(port, function(){
    console.log("App listening on port" + port)
});