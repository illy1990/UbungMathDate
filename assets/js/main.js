//,MATH - Ubung 1 - CodeFlow Übung lev1_1: Math.PI
console.log(Math.PI);
const PI = Math.PI;
let roundedPI = PI.toFixed(2);
console.log(roundedPI)

// MATH - Ubung 2 - CodeFlow Übung lev1_2: Math.round()

let CeilA = (Math.ceil(PI))
let CeilB = (Math.ceil(9.45))
let CeilC = (Math.ceil(193.4464))
let CeilD = (Math.ceil(0.8596433607))
let CeilE = (Math.ceil(0.65149992))
let CeilF = (Math.ceil(2.1807301500))
let CeilG = (Math.ceil(- 2.9406290890))
let CeilH = (Math.ceil(- 24.45))
console.log(CeilA);
console.log(CeilB);
console.log(CeilC);
console.log(CeilD);
console.log(CeilE);
console.log(CeilF);
console.log(CeilG);
console.log(CeilH);

function round(x) {
    let y = Math.round(x);
    return y;
}

console.log(round(3.232));
console.log(round(342.23343));


// MATH - Ubung 3 - CodeFlow Übung lev1_2: Math.round()

let randomNum = Math.random();
let randomNum1_10 = Math.floor(Math.random() * 10 + 1);
let randomNum1_100 = Math.floor(Math.random() * 100 + 1);

console.log(randomNum);
console.log(randomNum1_10);
console.log(randomNum1_100);

// MATH - Ubung 4 - CodeFlow Übung lev1_4: Math.min Math.max


console.log(Math.min(393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488));
console.log(Math.max(393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488));


