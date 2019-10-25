var express = require('express');
var app = express();

var PORT = process.env.PORT || 8000;

// create application json parser

app.use(express.static("public"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);

app.listen(PORT, function () {
    console.log("APP listening on http://localhost:" +
        PORT);
});