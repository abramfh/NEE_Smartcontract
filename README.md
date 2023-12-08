# NeeBytes Smart Contract

This repository contains the smart contract responsible for the daily distribution of mined coins.

## Coin Distribution
This contract runs every day at 00:00 UTC, aiming to send the total mined coins to a secondary wallet. The coins become available for users to make withdrawals from their mining activities. Additionally, an amount equal to 10% of the mined sum for the day is sent to a wallet belonging to the NeeBytes Group.

This contract can only be executed by the holder of the genesis wallet.

## Wallets
- **0x251D1A4b4d59E386a50f913c50F4BE6F49ac732d:** Wallet that receives the 10% value.
- **0xe96Ae680Ef223687e837d10eA643199C333ee4cD:** Wallet that receives the coins available for withdrawal.
- **0x43B15f703e872DA66256c8C58B69938Deb199425:** Wallet containing the coins generated in the genesis.

## Deployment
This contract was generated using Truffle.

### Steps:
1. Run the following commands:
    ```bash
    npm install
    truffle compile
    truffle migrate
    truffle migrate --network neebytes
    ```