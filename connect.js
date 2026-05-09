const mongoose = require("mongoose");
module.exports = () =>
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("🟢 MongoDB متصل"))
    .catch(() => console.log("🔴 فشل اتصال MongoDB"));
