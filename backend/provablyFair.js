// provablyFair.js
const CryptoJS = require("crypto-js");

const MODULUS = 69420; // Total numbers (0–69,419)

export function calculateOutcome(serverSeed, clientSecret) {
  const hash = CryptoJS.SHA256(serverSeed + clientSecret).toString();
  const outcome = parseInt(hash.slice(0, 6), 16) % MODULUS;
  return outcome;
}

export function isWin(outcome, selectedRange) {
  // Example: "33%" → 0–23,140
  const lowerBound = 0;
  const upperBound = (MODULUS * (selectedRange / 100));
  return outcome >= lowerBound && outcome <= upperBound;
}
