import type { ClientEvents } from "discord.js";

type EventKeys = keyof ClientEvents;

export class EListener<K extends EventKeys = EventKeys> {
  execute?: (...params: ClientEvents[K]) => void;
  once = false;

  constructor(public name: K) {}

  setExecutable(execute: typeof this.execute) {
    Reflect.set(this, "execute", execute);

    return this;
  }

  setOnce(once: typeof this.once) {
    Reflect.set(this, "once", once);

    return this;
  }
}
