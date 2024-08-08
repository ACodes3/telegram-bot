const TelegramBot = require('node-telegram-bot-api');
require("dotenv").config();

const TOKEN = process.env.TOKEN;

const bot = new TelegramBot(TOKEN, {polling:true});

bot.on("message", (message) => {

    console.log(message.text);
    console.log(message.from.id);
});