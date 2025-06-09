function estimateTransactionFee(amountToSend) {
  // Calculate 1.5% fee
  let fee = amountToSend * 0.015;

  // Make sure fee is at least 10 and at most 70 KES
  if (fee < 10) {
    fee = 10;
  } else if (fee > 70) {
    fee = 70;
  }

  // Total amount = amount + fee
  const total = amountToSend + fee;

  // Show results in the console
  console.log(`Amount to send: KES ${amountToSend.toFixed(2)}`);
  console.log(`Transaction fee: KES ${fee.toFixed(2)}`);
  console.log(`Total amount to be debited: KES ${total.toFixed(2)}`);
}

// Ask user for input
const userInput = prompt("How much do you want to send? (KES)");
const amountNum = Number(userInput);

if (amountNum > 0 && !isNaN(amountNum)) {
  estimateTransactionFee(amountNum);
} else {
  console.log("Please enter a valid positive number.");
}
