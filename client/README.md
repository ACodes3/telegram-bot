# Mini-App with Fiat Payment Using Stripe

## Objective

This project demonstrates the integration of third-party services by developing a mini-app for fiat payments using Stripe in test mode. The mini-app is built using React and is connected to a Telegram bot, enabling users to process payments directly through the interface.

## Features

- **Simple Payment Interface**: The app features a user-friendly interface with multiple buttons for selecting deposit amounts (e.g., 20€, 40€, 100€).
- **Stripe Integration**: Utilizes Stripe's test API to securely process fiat payments.
- **Payment Status Feedback**: Displays the result of each payment transaction (success or error) to the user.
- **Telegram Bot Integration**: Connects with a Telegram bot to facilitate payment notifications and interactions.

## Technology Stack

- **Frontend**: React.js
- **Backend**: Node.js
- **Payment Gateway**: Stripe API (Test mode)
- **Bot Integration**: Telegram Bot API

## Setup and Usage

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your system.
- **Stripe Account**: Create a Stripe test account and obtain your API keys.
- **Telegram Bot**: Set up a Telegram bot and obtain the API token.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/stripe-mini-app.git
   cd client
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure Environment Variables**:
   ```bash
    REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
    REACT_APP_TELEGRAM_BOT_TOKEN=your_telegram_bot_token
   ```
4. **Start the Development Server**:
   ```bash
    npm start
     ```
### Usage

- Open the app in your browser.
- Select a deposit amount by clicking one of the buttons (e.g., 20€, 40€, 100€).
- Follow the on-screen instructions to complete the payment process using Stripe.
- The result of the transaction (success or error) will be displayed on the screen.
- Payment notifications will also be sent via the connected Telegram bot.

## Deliverables

- **Source Code**: The complete source code for the mini-app is provided in this repository.
- **Documentation**: Minimal documentation is provided for setup and usage of the mini-app.
- **Live Demo**: Prepare a live demo to showcase the functionality of the mini-app during the interview presentation.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.