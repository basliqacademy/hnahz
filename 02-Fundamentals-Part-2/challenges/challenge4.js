"use strict";

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < 10; i++) {
  tips.push(calcTip(bills[i]));
  total.push(tips[i] + bills[i]);
}

console.log(tips, total);

function calcAverage(arr) {
  let sum = 0;
  let avg;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = sum / arr.length;
  return avg;
}

console.log(calcAverage(total));
