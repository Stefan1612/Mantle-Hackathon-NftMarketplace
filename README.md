# NFT-Marketplace

## Status

The NFT Marketplace is currently running and fully functional on the Mantle Testnet

The Website is online and running at [Website]()

## Local environment set up

1. git clone

2. npm i

3. npm start

4. npx hardhat console --network goerli

5. npx hardhat run scripts/deploy.js --network goerli

6. const contract = await ethers.getContractFactory("NftMarketPlaceV2")

7. const Contract = await contract.attach("[input address from deploying NftMarketPlaceV2 contract (step 5)]")

8. await Contract.setNftAddress("[input address from NFTV2 contract (step 5)]")

## Video Demo

## Approach

Running currently on Goerli
A NFT Marketplace running currently on Goerli. Let's you mint, sell and buy NFT's. During the minting we store the Metadata on IPFS and only store the TokenURI on-chain.

## Stack

"@transak/transak-sdk": "^1.0.31",
"@walletconnect/web3-provider": "^1.8.0",
"authereum": "^0.1.14",
"axios": "^0.24.0",
"gh-pages": "^3.2.3",
"ipfs-http-client": "^55.0.0",
"walletlink": "^2.5.0",
"web3modal": "^1.9.9"

### Blockchain Technologies

1. Environment - [Hardhat](https://hardhat.org/)
2. File Storage - [IPFS](https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client#install)
3. Client - [ethers.js](https://docs.ethers.io/v5/)
4. Testnet Mantle (EVM compatible layer 2 scalability solution, Optimistic Rollup) - [Mantle](https://www.mantle.xyz/developers)

## Biconomy

### Demo videos:

NFT Marketplace: hhttps://www.youtube.com/watch?v=zYdKS_B3RJo

### Gasless Transactions (currently still working out how to connect this with mantle, if I even can)

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
