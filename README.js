const readline = require('readline');

function estimateTransactionFee(amountToSend) {
  let fee = amountToSend * 0.015;

  if (fee < 10) {
    fee = 10;
  } else if (fee > 70) {
    fee = 70;
  }

  const total = amountToSend + fee;

  console.log(`\nSending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${total}\n`);
  console.log("Send Money Securely!");
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Unatuma Ngapi? (KES): ", (input) => {
  const amountNum = Number(input);
  if (!isNaN(amountNum) && amountNum > 0) {
    estimateTransactionFee(amountNum);
  } else {
    console.log("Please enter a valid positive amount.");
  }
  rl.close();
});
# Code-challenge1
