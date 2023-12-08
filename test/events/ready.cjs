const { EListener } = require("../../dist/index.js");

module.exports = new EListener("ready")
  .setOnce(true)
  .setExecutable((client) => {
    console.log(`Logged as ${client.user.tag}`);
  });
