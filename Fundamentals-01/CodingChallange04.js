const bill = 430

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`the  bill ${bill}, the tip value ${tip}, & total ${bill + tip}`);