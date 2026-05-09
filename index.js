const { Client, GatewayIntentBits } = require("discord.js");
const axios = require("axios");
const { token } = require("./config");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.once("ready", () => {
  console.log(`🤖 KUWAIT BOT شغال: ${client.user.tag}`);
});

client.on("guildMemberAdd", async (member) => {
  try {
    const res = await axios.get(
      `http://localhost:4000/api/settings/${member.guild.id}`
    );

    const settings = res.data;
    if (!settings?.welcome?.enabled) return;

    const channel = member.guild.channels.cache.get(
      settings.welcome.channel
    );
    if (!channel) return;

    channel.send(
      settings.welcome.message
        .replace("{user}", member.user)
        .replace("{server}", member.guild.name)
    );
  } catch (e) {}
});

client.login(token);
