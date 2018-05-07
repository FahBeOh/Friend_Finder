// Requires path, which adjust the path of the directory according to operating system being used
var path = require("path");
// Exports HTML route handling
module.exports = function(app) {

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });
    
    app.get("*", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}
