module.exports = {
    name: "hola",
    toggleOff: "",
    execute (message, args, client) {
        message.reply.text(`hola ${args}`)
    }
}