function estimateTransactionFee(amountToSend) {
  let fee = amountToSend * 0.015;
  if (fee < 10) {
    fee = 10;
  } else if (fee > 70) {
    fee = 70;
  }
  const total = amountToSend + fee;

  console.log(`Amount to send: KES ${amountToSend.toFixed(2)}`);
  console.log(`Transaction fee: KES ${fee.toFixed(2)}`);
  console.log(`Total amount to be debited: KES ${total.toFixed(2)}`);
}

const userInput = prompt("How much do you want to send? (KES)");
const amountNum = Number(userInput);

if (amountNum > 0 && !isNaN(amountNum)) {
  estimateTransactionFee(amountNum);
} else {
  console.log("Please enter a valid positive number.");
}
