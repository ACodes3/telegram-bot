require("dotenv").config();
const { Telegraf } = require("telegraf");

const TOKEN = process.env.TOKEN;
const botApp = new Telegraf(TOKEN);

const web_link = "https://telegram-bot-frontend-five.vercel.app/";

botApp.on(message('text'), (ctx) => {
    ctx.reply("Telegram Mini App", {
        reply_markup: {
            keyboard: [[{ text: "Web App", web_app: { url: web_link } }]],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    });
});

bot.launch();
