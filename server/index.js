const TelegramBot = require('node-telegram-bot-api');
const express = require("express");
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Nyb6cJZ876BzVvReRs8lyArujHATJA4Od5YRU0N0dmCe61vV80UL2yURF0e5A8qiDApTk7Srbo95o2nzRDLGejR00S1c7yKQJ');
const { v4: uuidv4 } = require('uuid');
const { handleMessage } = require("./controller/lib/telegram");
const PORT = process.env.PORT || 4040;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
    res.send("IT WORKS AT MY WEBSITE");
  });

require("dotenv").config();

// STRIPE INTEGRATION
app.post("/create-checkout-session", async (req, res) => {
    const { amount } = req.body;
  
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: 'Deposit',
              },
              unit_amount: amount,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
      });
  
      res.json({ id: session.id });
    } catch (error) {
      console.error('Error creating checkout session:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

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
