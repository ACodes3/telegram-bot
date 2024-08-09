# Telegram Bot with Stripe Integration

This repository contains the source code for a basic Telegram bot integrated with Stripe, designed for deployment on Netlify using serverless functions.

## Features

- **/start**: Provides a welcome message and an introduction to the bot's functionality.
- **/balance**: Displays the user's current balance.
- **/bet <amount>**: Allows the user to place a bet. The outcome is determined randomly, and the balance is updated accordingly.
- **Stripe Integration**: Supports payment processing through Stripe.

## Technology Stack

- **Language**: JavaScript (Node.js)
- **Frameworks**: Express.js, node-telegram-bot-api
- **Payment Gateway**: Stripe
- **Deployment**: Netlify (Serverless Functions)

## Setup and Deployment

### Prerequisites

- Node.js
- npm or yarn
- A Telegram Bot Token from [BotFather](https://core.telegram.org/bots#botfather)
- A Stripe account and API key
- Netlify CLI

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ACodes3/telegram-bot.git
    cd telegram-bot
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Configure environment variables:**

    Create a `.env` file in the root directory of the project and add the following variables:

    ```plaintext
    TOKEN=your_telegram_bot_token
    REACT_APP_STRIPE_PRIVATE_KEY=your_stripe_private_key
    ```

4. **Deploy to Netlify:**

    - Log in to Netlify:

      ```bash
      netlify login
      ```

    - Initialize and deploy:

      ```bash
      netlify init
      netlify deploy
      ```

5. **Set environment variables on Netlify:**

   Go to the [Netlify dashboard](https://app.netlify.com/), navigate to your site, and add the environment variables `TOKEN` and `REACT_APP_STRIPE_PRIVATE_KEY` under the "Build & Deploy" settings.

### Testing the Bot

Once deployed, you can interact with the bot using Telegram by sending commands such as `/start`, `/balance`, and `/bet <amount>`.

### API Endpoints

- **POST /**: Handles incoming Telegram messages and processes them based on the command.

### Source Code

The main bot logic is implemented in the `netlify/functions/telegram-bot.js` file.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
