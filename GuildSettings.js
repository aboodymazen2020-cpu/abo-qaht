const { Schema, model } = require("mongoose");

const schema = new Schema({
  guildId: String,
  welcome: {
    enabled: Boolean,
    channel: String,
    message: String
  }
});

module.exports = model("GuildSettings", schema);
