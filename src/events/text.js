const Enmap = require("enmap");

module.exports = {
    name: "text",
    execute(client, message) {
        const prefix = "!"

        if(!message.text.startsWith(prefix)) return;
        const args = message.text.slice(prefix.length).split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(`${commandName}`);
        if(!command) {
            return message.reply.text(`${commandName} no es un comando valido!`);
        }
        if(command) {
            if (command.toggleOff) {
                return message.reply.text(`Este comando fue deshabiltado por mi creador!!`)
            }
        }

        try{
            command.execute(message, args, client)
        }catch(error){
            console.log(error)
            message.reply.text("Ocurrio un error al ejecutar ese comando")
        }
    }
}