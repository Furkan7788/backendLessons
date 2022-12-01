const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const route = require("./routes/routes.js");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.set("case sensitive routing", true);

app.use(route);

app.listen(3000, () => {
  console.log("started", "saasdas");
});
