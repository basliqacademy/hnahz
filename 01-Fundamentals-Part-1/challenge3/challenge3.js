/* // Test data:
Dolphins score: 96, 108, 89
Koalas score: 88, 91, 110 */

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Winner: dolphins");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Winner: koalas");
} else {
  console.log("Both win!");
}

/* // Bonus1:
Dolphins score: 97, 112, 101
Koalas score: 109, 95, 123 */

const scoreDolphins1 = (97 + 112 + 101) / 3;
const scoreKoalas1 = (109 + 95 + 123) / 3;

if (scoreDolphins1 > scoreKoalas1 && scoreDolphins1 >= 100) {
  console.log("Winner: dolphins");
} else if (scoreDolphins1 < scoreKoalas1 && scoreDolphins1 >= 100) {
  console.log("Winner: koalas");
} else {
  console.log("Both win!");
}

/* // Bonus2:
Dolphins score: 97, 112, 101
Koalas score: 109, 95, 106 */

const scoreDolphins2 = (97 + 112 + 101) / 3;
const scoreKoalas2 = (109 + 95 + 106) / 3;

if (scoreDolphins2 > scoreKoalas2 && scoreDolphins2 >= 100) {
  console.log("Winner: dolphins");
} else if (scoreDolphins2 < scoreKoalas2 && scoreDolphins2 >= 100) {
  console.log("Winner: koalas");
} else if (
  scoreDolphins2 === scoreKoalas2 &&
  scoreDolphins2 >= 100 &&
  scoreKoalas2 >= 100
) {
  console.log("Both win!");
} else {
  console.log("There is no winner!");
}
