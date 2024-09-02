"use strict";

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const checkWinner = function (averageDolphins, averageKoalas) {
  if (averageDolphins >= 2 * averageKoalas) {
    console.log(`Dolphins win (${averageDolphins} vs. ${averageKoalas})`);
  } else if (averageKoalas >= 2 * averageDolphins) {
    console.log(`Koalas win (${averageKoalas} vs. ${averageDolphins})`);
  } else {
    console.log("There is no winner!");
  }
};

/* // Test data1: 
Dolphins score: 44, 23, 71
Koalas score: 65, 54, 49 */

const averageDolphins = calcAverage(44, 23, 71);
const averageKoalas = calcAverage(65, 54, 49);
console.log(
  `Dolphins score: ${averageDolphins} \nKoalas score: ${averageKoalas}`
);

checkWinner(averageDolphins, averageKoalas);

/* // Test data2: 
Dolphins score: 85, 54, 41
Koalas score: 23, 34, 27 */

averageDolphins = calcAverage(85, 54, 41);
averageKoalas = calcAverage(23, 34, 27);
console.log(
  `Dolphins score: ${averageDolphins} \nKoalas score: ${averageKoalas}`
);

checkWinner(averageDolphins, averageKoalas);
