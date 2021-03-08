const express = require("express");
const { commands } = require("../../handlers/command-handler");
const bot = require("../../bot");

const router = express.Router();

router.get("/", (req, res) =>
  res.render("index", {
    client: bot,
  })
);

router.get("/about", (req, res) =>
  res.render("about", {
    client: bot,
  })
);


router.get("/maintenance", (req, res) =>
  res.render("maintenance", {
    client: bot,
  })
);

router.get("/commands", (req, res) =>
  res.render("commands", {
    subtitle: "Commands",
    categories: [
      { name: "Auto Mod", icon: "fas fa-gavel" },
      { name: "Economy", icon: "fas fa-coins" },
      { name: "General", icon: "fas fa-star" },
      { name: "Music", icon: "fas fa-music" },
    ],
    commands: Array.from(commands.values()),
    commandsString: JSON.stringify(Array.from(commands.values())),
    client: bot,
  })
);

module.exports = router;
