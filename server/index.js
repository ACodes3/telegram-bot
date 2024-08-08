const TelegramBot = require('node-telegram-bot-api');
const express = require("express");
const { handleMessage } = require("./controller/lib/telegram");
const PORT = process.env.PORT || 4040;
const app = express();

require("dotenv").config();

// STRIPE INTEGRATION
app.use(express.json()); 
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

// Telegram BOT
const TOKEN = process.env.TOKEN;

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", async (message) => {
    console.log(message);
    await handleMessage(message);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
