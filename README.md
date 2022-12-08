# Telegram-Handler
Un handler creado por mi con anti-crash, event &amp; command handler. El mejor handler para iniciar a programar un bot de telegram!

Primero tienes que hacer en el terminal npm i ``npm i telebot enmap fs`` Luego tienes que poner tu token en ``./src/public/config.json``

Aqui tienes la base para todos los comandos que quieras hacer:

```js
module.exports = {
    name: '', //El nombre del comando ---- Obligatorio
    toggleOff: false, //Defines si el comando esta deshabilitado o no, default false ---- Optional
    async execute(message, args, client){
    },
};
```

Para finalizar haz tus comandos y disfruta del handler! <3

# Repositorios usados

https://github.com/Uryaaa/Basic-telegrambot-dengan-command-handler

https://github.com/jakenuno/bot-telegram

https://github.com/LaLlamaDJ/Discord-Handler
