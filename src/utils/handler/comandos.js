module.exports.comandos = function (fs, client, Enmap) {
    client.commands = new Enmap();
    const commandFolder = fs.readdirSync(__dirname + "/" + `../../commands`);
    for (const folder of commandFolder) {
      const commandFile = fs.readdirSync(__dirname + "/" + `../../commands/${folder}`);
      for (const file of commandFile) {
        const command = require(__dirname + "/" + `../../commands/${folder}/${file}`);
        client.commands.set(command.name.toLowerCase(), command);
      }
    }
}