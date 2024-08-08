const { getAxiosInstance } = require("./axios");
const { errorHandler } = require("./helper");

require("dotenv").config();

const TOKEN = process.env.TOKEN;
const BASE_URL = `https://api.telegram.org/bot${TOKEN}`;
const axiosInstance = getAxiosInstance(BASE_URL);

function sendMessage(chatId, messageText) {
    return axiosInstance
        .get("sendMessage", {
            chat_id: chatId,
            text: messageText,
        })
        .catch((ex) => {
            errorHandler(ex, "sendMessage", "axios");
        });
}
const users = {};

async function handleMessage(messageObj) {
    const messageText = messageObj.text || "";
    if (!messageText) {
        errorHandler("No message text", "handleMessage");
        return "";
    }

    try {
        const chatId = messageObj.chat.id;

        // Initialization of user balance if not already set
        if (!users[chatId]) {
            users[chatId] = { balance: 100 }; // Default balance
        }

        if (messageText.charAt(0) === "/") {
            const [command, ...args] = messageText.substr(1).split(" ");
            switch (command) {
                case "start":
                    return sendMessage(
                        chatId,
                        "Hi! I am a bot. Ready to test your luck and win big? Let's get started! Place your bets and may the odds be ever in your favor! 🍀"
                    );
                case "balance":
                    return sendMessage(
                        chatId,
                        `Your current balance is $${users[chatId].balance}.`
                    );
                case "bet":
                    if (args.length !== 1) {
                        return sendMessage(chatId, "Please use the format: /bet <amount>. Example: /bet 10");
                    }

                    const betAmount = parseFloat(args[0]);
                    if (isNaN(betAmount) || betAmount <= 0) {
                        return sendMessage(chatId, "Please enter a valid bet amount.");
                    }
                    if (betAmount > users[chatId].balance) {
                        return sendMessage(chatId, "Insufficient balance to place this bet.");
                    }

                    // Simple bet logic: 50% chance to double the bet amount, otherwise lose it
                    const win = Math.random() > 0.5;
                    if (win) {
                        users[chatId].balance += betAmount;
                        return sendMessage(
                            chatId,
                            `Congratulations! You won $${betAmount}. Your new balance is $${users[chatId].balance}.`
                        );
                    } else {
                        users[chatId].balance -= betAmount;
                        return sendMessage(
                            chatId,
                            `You lost $${betAmount}. Your new balance is $${users[chatId].balance}. Better luck next time!`
                        );
                    }
                default:
                    return sendMessage(chatId, "Hey, I don't recognize that command. Try /start to see what I can do!");
            }
        } else {
            return sendMessage(chatId, messageText);
        }
    } catch (error) {
        errorHandler(error, "handleMessage");
    }
}

module.exports = { sendMessage, handleMessage };