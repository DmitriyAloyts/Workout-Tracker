const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
mongoose.connect(process.env.MONGODB_URI || "mongodb://Dmitriy:Password123@ds137291.mlab.com:37291/heroku_z4rdmgcs", { useNewUrlParser: true });

const db = require("./models");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});