# Lottery Game Contract deployed on Polygon Matic Testnet
- 0x6815d3dCBd4dBeD63b67178d5b98b707B4981344

## Reelevant transactions that were used to test the contract's functionalities on the live testnet chain
### Start the game
- https://mumbai.polygonscan.com/tx/0xda02a869e9b5e6dcdf09a996507874ccada0c4e3422658e3dbf33dde5352f8f3

### Join the game - Player 1
- https://mumbai.polygonscan.com/tx/0x1ed30c19220c35bb06c18325dde48c698333a1b95835a4e51452550afb5a54b7

### Join the game - Player 2 & Fires the getRandomWinner() that actually calls the chanlink VRF
- https://mumbai.polygonscan.com/tx/0xd605ef195a45dd5341afd98fe95a7b1af0fbd20ec16ef23ce612dd078316bc0f

------

## Notes:
- Polygon testnet is slow AF.
- The RandomWinnerGame contract must have enough LINK to call the Chainlink's VRF Oracle Contract!
  - Again, the contract must have the LINKs, not the account calling the contract, but the contract!!!