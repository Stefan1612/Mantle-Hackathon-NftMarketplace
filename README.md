# NFT-Marketplace

## Demo Video

NFT Marketplace: https://www.youtube.com/watch?v=YPiSkegUzG0

## Status

The NFT Marketplace is currently running and functional on the Mantle Testnet

The Website is online and running at [Website](https://shimmering-rabanadas-b0de69.netlify.app/)

## Contract addresses

Marketplace: https://explorer.testnet.mantle.xyz/address/0x97723054F8297f0D1fcFf062C40800299C25c464

NFT: https://explorer.testnet.mantle.xyz/address/0x9381320117a3d703F526590969aFf1617A26baD6

(Following contracts are not fully implemented yet but the prototypes are deployed)

DutchAuctionFactory: https://explorer.testnet.mantle.xyz/address/0xCbF499Fc9E05443712cBFd530B65549dbBfbD23c

EngAuctionFactory: https://explorer.testnet.mantle.xyz/address/0xec477096A919Ff96A1e4dd959b224d23060d58bC

## Local environment set up

1. git clone

2. npm i

3. Set up .env

4. npm start

5. npx hardhat console --network mantleTestnet

6. npx hardhat run scripts/deploy.js --network mantleTestnet

7. const contract = await ethers.getContractFactory("NftMarketPlaceV2")

8. const Contract = await contract.attach("[input address from deploying NftMarketPlaceV2 contract (step 6)]")

9. await Contract.setNftAddress("[input address from NFTV2 contract (step 6)]")

## Approach

Running currently on the Mantle Testnet
A NFT Marketplace running currently on the Mantle Testnet. Let's you mint, sell and buy NFT's. During the minting we store the Metadata on IPFS and only store the TokenURI on-chain.

### In Process

#### Allow users to auction their NFTs in an Eng and Dutch auction (prototypes already deployed)

#### NFT Tx History (Used the covalent API, doesn't feature Mantle testnet yet)

#### The ability to buy cryptocurrencies with fiat (using transak)

#### Bridge (Currently using SDK Hyphen, doesn't feature Mantle testnet yet)

Note: In the Mantle docs there is an API to easily integrate their bridge into this Marketplace in the future https://docs.mantle.xyz/tools-and-sdk/mantle-bridge-api

## Stack

### Blockchain Technologies

1. Environment - [Hardhat](https://hardhat.org/)
2. File Storage - [IPFS](https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client#install)
3. Client - [ethers.js](https://docs.ethers.io/v5/)
4. Testnet Mantle (EVM compatible layer 2 scalability solution, Optimistic Rollup) - [Mantle](https://www.mantle.xyz/developers)

## Biconomy

### Demo videos:

SKD Hyphen: https://www.youtube.com/watch?v=cViRhJu1qIM (this bridge doesn't feature the mantle network yet)

### Hyphen Widget

The Biconomy Hyphen Widget allows for fast and easy cross chain movement of funds. You can easily with a few clicks and seconds transfer your
Tokens from one network to another

Biconomy docs: https://docs.biconomy.io/products/hyphen-instant-cross-chain-transfers/hyphen-widget

Added at: [Code]()

### Gasless Transactions (there is no need for this anymore due to the low gas fees on the layer-2 solution Mantle)

This NFT allows party gasless NFT minting,selling and buying (mintNFT(), sellNFT(), buyNFT()) thanks to biconomy (only the marketplace itself and not NFT contract is currently gasless, because of the nature of my contract setup only the second transaction you need to accept for minting, etc... will be gasless (you still have to pay 0.002 eth fee to the contract to the owner when minting))

Biconomy docs: https://docs.biconomy.io/products/enable-gasless-transactions/choose-an-approach-to-enable-gasless/eip-2771

Added at: [Code]()

And all contracts modified accordingly: [Code]()

### Frontend

- [React](https://reactjs.org/)
- [ethers.js](https://docs.ethers.io/v5/)
- [MUI: React UI Library](https://mui.com/)
- [Bootstrap]

## Backend

- [Netlify](https://www.netlify.com/): Website host
- [Node.js](https://nodejs.org/en/)

## Challenges

- Handling Allowance
- IPFS upload
