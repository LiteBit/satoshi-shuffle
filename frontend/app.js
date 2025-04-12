async function placeBet() {
  const betAmount = document.getElementById("betAmount").value;
  const selectedRange = document.getElementById("rangeSelect").value;
  const clientSecret = crypto.randomUUID(); // Auto-generate for simplicity

  // Send bet to backend
  const response = await fetch("/bet", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      betAmount,
      selectedRange,
      clientSecret
    })
  });

  const invoice = await response.json();
  // Display Lightning invoice to user (e.g., via QR code)
}

// Automatic outcome verification (using stored secrets and Nostr seeds)
async function checkOutcomes() {
  // Fetch latest serverSeed from Nostr
  // Compare with stored bets and update UI
}
