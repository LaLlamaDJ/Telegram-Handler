const TeleBot = require("telebot");
const Enmap = require("enmap");
const fs = require("fs");
const { token } = require(`${__dirname}/src/public/config.json`);

const client = new TeleBot(token);

const { comandos } = require(`${__dirname}/src/utils/handler/comandos.js`);
const { eventos } = require(`${__dirname}/src/utils/handler/eventos.js`);

comandos(fs, client, Enmap)
eventos(fs, client)

////////////----Anti Crash----////////////
process.on("unhandledRejection", (reason, p) => {
  console.log(" [antiCrash] :: Unhandled Rejection/Catch");
  console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
  console.log(" [antiCrash] :: Uncaught Exception/Catch");
  console.log(err, origin);
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log(" [antiCrash] :: Uncaught Exception/Catch (MONITOR)");
  console.log(err, origin);
});
process.on("multipleResolves", (type, promise, reason) => {
  console.log(" [antiCrash] :: Multiple Resolves");
  console.log(type, promise, reason);
});
////////////----Anti Crash----////////////

client.start();