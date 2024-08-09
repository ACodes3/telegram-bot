require("dotenv").config();
const TelegramBot = require('node-telegram-bot-api');
const express = require("express");
const cors = require('cors');
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_PRIVATE_KEY);
const { handleMessage } = require("./controller/lib/telegram");
//const PORT = process.env.PORT || 4040;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
    res.send("IT WORKS AT MY WEBSITE");
  });

// STRIPE INTEGRATION
app.post('/create-checkout-session', async (req, res) => {
  const { token, product } = req.body;

  try {
    const charge = await stripe.charges.create({
      amount: product.amount * 100, // Convert to cents
      currency: 'eur',
      source: token.id,
      description: `Deposit for telegram bot`,
    });

    res.status(200).send({ success: true, charge });
  } catch (error) {
    console.error("Error creating charge:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

// Telegram BOT
const TOKEN = process.env.TOKEN;

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", async (message) => {
    console.log(message);
    await handleMessage(message);
});

//LISTENING ON PORT
//app.listen(PORT, () => {
//    console.log(`Server running on port ${PORT}`);
//});
