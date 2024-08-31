/* // Test data: 
Bill: 275, 40, 430 */

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`Bill: ${bill}\nTip: ${tip}\nTotal: ${bill + tip}`);
