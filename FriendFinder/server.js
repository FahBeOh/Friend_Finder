// Required node modules
var express = require("express");
var bodyParser = require("body-parser");

// Convenience variable to access express functions
var app = express();
// Convience variable PORT location
var PORT = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./app/public'));

// Requires modules for route handling
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// Initiates server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})