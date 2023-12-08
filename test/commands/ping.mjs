import { ECommand } from "../../dist/index.js";

export default new ECommand()
  .setName("ping")
  .setDescription("Display application's ping")
  .setExecutable((interaction) => {
    interaction.reply(`${interaction.client.ws.ping}`);
  });
