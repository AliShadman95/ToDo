var express = require("express"),
  app = express(),
  port = process.env.PORT || 3005,
  bodyParser = require("body-parser"),
  cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require("./api/routes/todoListRoutes"); //importing routes
routes(app); //register the routes

app.listen(port);
console.log("todo list RESTful API server started on:" + port);
