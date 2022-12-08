module.exports.eventos = function (fs, client) {
    const eventFiles = fs.readdirSync(__dirname + "/" + `../../events/`).filter((file) => file.endsWith(".js"));
    for (const file of eventFiles) {
      const event = require(__dirname + "/" + `../../events/${file}`);
      client.on(event.name, (...args) => event.execute(client, ...args));
    }
}