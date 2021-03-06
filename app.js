const express = require("express");
require("dotenv/config");
const app = express();
const trackerRoutes = require("./routes/trackerRoutes");
const seedDB = require("./seed");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const port = process.env.PORT || 2323;
app.get("/", (req, res) => {
  res.send("use /tracker to acess tracker");
});

const sgMail = require("@sendgrid/mail");
const API_KEY =
  "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";
sgMail.setApiKey(API_KEY);

const message = {
  to: "subham@gmail.com",
  from: "suyoggadal1823@gmail.com", //i was not allowed to create acc on sendgrid so i used my friends api
  subject: "working",
  text: "Hello from xyz",
  html: "<h1>hello</h1>",
};

sgMail
  .send(message)
  .then((response) => console.log("Email sent successfully"))
  .catch((err) => console.log(err.message));

mongoose.connect(process.env.DB_CONNECTION).then(() => {
  console.log("...");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err) {
    if (err) throw err;
    else console.log("Connected");
  }
);

seedDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(trackerRoutes);

app.listen(port, (req, res) => {
  console.log("Server Started At Port 2323");
});
