const { EClient, GatewayIntentBits } = require("../dist/index.js");
require("dotenv/config.js");

const client = new EClient({
  intents: [GatewayIntentBits.Guilds],
  paths: {
    commands: "test/commands/**/*.cjs",
    listeners: "test/events/*.cjs",
  },
});

client.login(process.env.DUMMY_BOT_TOKEN);
