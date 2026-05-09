require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const connect = require("./database/connect");

connect();
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/settings", require("./routes/settings"));

app.listen(4000, () =>
  console.log("🌐 API شغال على 4000")
);
