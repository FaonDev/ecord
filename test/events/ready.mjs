import { EListener } from "../../dist/index.js";

export default new EListener("ready").setOnce(true).setExecutable((client) => {
  console.log(`Logged as ${client.user.tag}`);
});
