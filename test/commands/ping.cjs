const { ECommand } = require("../../dist/index.js");

module.exports = new ECommand()
  .setName("ping")
  .setDescription("Display application's ping")
  .setExecutable((interaction) => {
    interaction.reply(`${interaction.client.ws.ping}`);
  });
