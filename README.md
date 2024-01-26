# SolGasPulse

Track your Solana gas expenditure over the last 24 hours with SolGasPulse! 🚀

## Overview

SolGasPulse is a tool designed to help you monitor and analyze the amount of Solana gas (⛽️) you've spent within the last 24 hours. This project also supports tracking transactions associated with .sol domains.

## Features

- **Gas Tracking:** View detailed information on your Solana gas consumption.
- **Time Frame:** Analyze your gas usage within the last 24 hours.
- **.sol Domain Support:** SolGasPulse seamlessly integrates with Solana transactions involving .sol domains.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/VIVEK-SUTHAR/solana-gas-pulse
   ```

2. **Install Dependencies:**

   ```bash
   cd SolGasPulse
   npm install
   ```

3. **Configure:**

   - Add the necessary environment variables in `.env` file

4. **Run the Application:**

   ```bash
   npm run dev
   #or
   yarn dev
   ```

5. **Access SolGasPulse:**
   Open your browser and navigate to `http://localhost:3000` to start tracking your Solana gas usage!

## Configuration

In the `.env` file, you can set the following configurations:

- `SOLANA_RPC_URL`: The Solana RPC endpoint URL.
- `SOLANA_SNS_RPC_URL`: The Solana RPC Endpoint for `.sol` domain resolving.(I used quicknode)

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.
