import type { ECommand } from "./command";
import type { EListener } from "./listener";
import {
  type ChatInputCommandInteraction,
  Client,
  type ClientOptions,
} from "discord.js";
import { vinta } from "vinta";

export type ECommandHandler = (
  interaction: ChatInputCommandInteraction,
  command: ECommand,
) => void;

export type EClientOptions = ClientOptions & {
  handler?: {
    commands?: ECommandHandler;
  };
  paths?: {
    commands?: string;
    listeners?: string;
  };
};

export class EClient extends Client {
  constructor({ handler, paths, ...props }: EClientOptions) {
    super(props);

    if (paths?.commands)
      this.#addCommands({
        handler: handler?.commands,
        path: paths.commands,
      });

    if (paths?.listeners) this.#addListeners(paths.listeners);
  }

  async #addCommands({
    handler,
    path,
  }: {
    handler?: ECommandHandler;
    path: string;
  }) {
    const { modules: commands } = await vinta<ECommand>(path, {
      onlyDefault: true,
    });

    this.once("ready", () => {
      this.application?.commands.set(commands);
    });

    this.on("interactionCreate", (interaction) => {
      if (!interaction.isChatInputCommand()) return;

      const command = commands.find(
        ({ name }) => name === interaction.commandName,
      );

      if (handler && command?.handler) return handler(interaction, command);

      if (command?.execute) command.execute(interaction);
      else interaction.reply("Invalid command.");
    });
  }

  async #addListeners(path: string) {
    const { modules: listeners } = await vinta<EListener>(path, {
      onlyDefault: true,
    });

    for (const { execute, name, once } of listeners)
      if (execute) this[once ? "once" : "on"](name, execute);
  }
}
