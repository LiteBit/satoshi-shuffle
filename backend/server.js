// server.js
const express = require("express");
const { calculateOutcome } = require("./provablyFair");
const nostrTools = require("nostr-tools");

const app = express();
app.use(express.json());

// Simulate a rotating server seed (replace with real Nostr integration)
let currentServerSeed = crypto.randomUUID();
setInterval(() => {
  currentServerSeed = crypto.randomUUID();
  // Publish to Nostr (see below)
}, 60000); // Rotate every minute

// Endpoint to place a bet
app.post("/bet", (req, res) => {
  const { betAmount, selectedRange, clientSecret } = req.body;
  // 1. Validate inputs
  // 2. Generate Lightning invoice (use a Lightning API like LNBits)
  // 3. Store bet details with clientSecret and currentServerSeed
  // 4. Return invoice details to the client
  res.json({ invoice: "lnbc..." });
});

// Example Nostr event publishing (use nostr-tools)
function publishServerSeed() {
  const event = nostrTools.createEvent({
    kind: 9734, // Custom event for server seeds
    tags: [["d", "server_seed"]],
    content: currentServerSeed,
  });
  nostrTools.signEvent(event, "YOUR_NOSTR_PRIVATE_KEY");
  // Publish to a relay (e.g., wss://nostr-pub.wellorder.net)
}

app.listen(3000, () => {
  console.log("Satoshi Shuffle backend running on port 3000");
});
