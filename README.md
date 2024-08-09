# Telegram Bot and Payment Integration Project

## Overview

This project consists of three main components:

1. **Telegram Bot**: A basic bot that interacts with users and supports commands relevant to an online gambling context.
2. **Mini-App with Fiat Payment**: A simple application for processing fiat payments using Stripe.
3. **Deployment Information**: Details on how to run and deploy the project, including known issues.

## Subtask 1: Telegram Bot

### Overview

The Telegram bot responds to basic commands relevant to online gambling, such as `/start`, `/balance`, and `/bet`.

### Setup

1. **Create a Telegram Bot**:
   - Use the BotFather on Telegram to create a new bot and get your API token.

2. **Install Dependencies**:
   - Navigate to the bot's directory and install the required packages:
     ```bash
     npm install
     ```

3. **Configure the Bot**:
   - Set up your bot token in a `.env` file:
     ```env
     TOKEN=your_bot_token_here
     ```

4. **Run the Bot Locally**:
   - Start the bot with:
     ```bash
     npm start
     ```

5. **Deployment**:
   - Deployed on Vercel.

## Subtask 2: Mini-App with Fiat Payment Using Stripe

### Overview

This mini-app includes a React frontend and a Node.js in the backend that allows users to make fiat payments via Stripe.

### Setup

1. **Frontend (React)**:
   - Navigate to the `client` directory:
     ```bash
     cd frontend
     ```

   - Install dependencies:
     ```bash
     npm install
     ```

   - Create a `.env` file and add your Stripe public key:
     ```env
     REACT_APP_STRIPE_KEY=your_stripe_public_key_here
     ```

   - Run the React app locally:
     ```bash
     npm start
     ```

2. **Backend (Node.js/Express)**:
   - Navigate to the `server` directory:
     ```bash
     cd backend
     ```

   - Install dependencies:
     ```bash
     npm install
     ```

   - Create a `.env` file and add your Stripe secret key:
     ```env
     REACT_APP_STRIPE_PRIVATE_KEY=your_stripe_secret_key_here
     ```

   - Run the backend server locally:
     ```bash
     npm start
     ```

3. **Deployment**:
   - The backend is deployed on Vercel. Due to slow response times, it is recommended to run the backend locally for a better experience.

### Known Issues

- **Backend Deployment**: The backend deployment on Vercel is experiencing slow response times. For a better experience, run the backend locally.

## Additional Notes

- Make sure to replace placeholder values in `.env` files with actual keys.
- For detailed API usage, refer to the [Telegram Bot API Documentation](https://core.telegram.org/bots/api) and [Stripe API Documentation](https://stripe.com/docs/api).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to reach out with any questions or issues. Enjoy exploring the Telegram bot and payment integration!
