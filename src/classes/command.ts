import {
  type ChatInputCommandInteraction,
  SlashCommandBuilder,
} from "discord.js";

export class ECommand extends SlashCommandBuilder {
  execute?: (interaction: ChatInputCommandInteraction) => void;
  handler = false;

  setHandler(handler: typeof this.handler) {
    Reflect.set(this, "handler", handler);

    return this;
  }

  setExecutable(execute: typeof this.execute) {
    Reflect.set(this, "execute", execute);

    return this;
  }
}
