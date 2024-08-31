// Test data1:
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

/* // Test data2:
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76; */

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const markHigherBMI = BMIMark > BMIJohn;

console.log("Mark's BMI: " + BMIMark, "\nJohn's BMI: " + BMIJohn);
console.log("Is mark's BMI higher than John's? " + markHigherBMI);
