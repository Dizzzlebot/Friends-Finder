var express = require('express');
var app = express();
var path = require("path");
var nodemon = require("nodemon");

var PORT = process.env.PORT || 8080;

// create application json parser

app.use(express.static("app/public"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json({
    type: 'application/**json'
}));

app.use(express.text({
    type: 'text/html'
}))


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("APP listening on http://localhost:" +
        PORT);
});