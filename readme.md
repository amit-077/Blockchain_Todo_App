# ToDo Blockchain App

A simple ToDo app built using blockchain technology, with Ethereum smart contracts implemented in Solidity, and a frontend interface developed using ReactJS. 
This project utilizes Truffle for smart contract compilation and deployment, as well as Ganache for local blockchain development.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Truffle](https://www.trufflesuite.com/truffle)
- [Ganache](https://www.trufflesuite.com/ganache)
- [Metamask](https://metamask.io/) (for testing on the Ethereum blockchain)
  
### Installation

1. Clone the repository:

   ```
   git clone https://github.com/amit-077/Blockchain_Todo_App.git
   ```
2. Setting up:
   ```
   cd ./Blockchain_Todo_App
   cd my-app
   npm install
   ```
3. Compile and migrate smart contracts:
   ```
   truffle compile
   truffle migrate
   ```
4. Start the react app:
   ```
   npm start
   ```

# Usage
1. Ensure Ganache is running to simulate a local blockchain environment.
2. Connect Metamask to your local Ganache network.
3. Open the app in your browser and start adding, updating, and completing tasks on the blockchain.

# Technologies Used
- Solidity
- Truffle
- Ganache
- ReactJS
