# Easy Discord

## Create a Discord bot with just a few lines.

```sh-session
bun add ecord
npm add ecord
pnpm add ecord
yarn add ecord
```

### Quick Start

```js
// src/index.js
import { EClient, GatewayIntentBits } from "ecord";

const client = new EClient({
  intents: [GatewayIntentBits.Guilds],
  paths: {
    commands: "src/commands/*.js",
    listeners: "src/events/*.js",
  },
});

client.login("YOUR_BOT_TOKEN");
```

### ECommand

```ts
// src/commands/ping.js
import { ECommand } from "ecord";

export default new ECommand()
  .setName("ping")
  .setDescription("Display application's ping")
  .setExecutable((interaction) => {
    interaction.reply(`${interaction.client.ws.ping}`);
  });
```

### EListener

```ts
// src/listeners/ready.js
import { EListener } from "ecord";

export default new EListener("ready").setOnce(true).setExecutable((client) => {
  console.log(`Logged as ${client.user.tag}`);
});
```

### License

Refer to the [LICENSE](LICENSE).
