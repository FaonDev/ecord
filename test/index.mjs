import { EClient, GatewayIntentBits } from "../dist/index.js";
import "dotenv/config.js";

const client = new EClient({
  intents: [GatewayIntentBits.Guilds],
  paths: {
    commands: "test/commands/**/*.mjs",
    listeners: "test/events/*.mjs",
  },
});

client.login(process.env.DUMMY_BOT_TOKEN);
