const router = require("express").Router();
const GuildSettings = require("../database/GuildSettings");

router.get("/:guildId", async (req, res) => {
  const data = await GuildSettings.findOne({ guildId: req.params.guildId });
  res.json(data || {});
});

router.post("/:guildId", async (req, res) => {
  await GuildSettings.updateOne(
    { guildId: req.params.guildId },
    { $set: req.body },
    { upsert: true }
  );
  res.json({ success: true });
});

module.exports = router;
