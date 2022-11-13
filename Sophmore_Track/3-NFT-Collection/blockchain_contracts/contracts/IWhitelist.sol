// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

interface IWhitelist {
  // This function will validate if an address is whitelisted in the Whitelist contract
  // Will call the whitelistedAddresses mapping that was created in the Whitelist contract
  function whitelistedAddresses(address) external view returns (bool);
}