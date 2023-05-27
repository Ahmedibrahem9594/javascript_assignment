let myArray = ["E", "l", "z", ["e", "r"], "o"];
let newArray = myArray.reduce(function (acc, curr) {
    return `${acc}${curr}`
}).split("").map(function (el) {
    return el != "," ? el : "";
}).join("")
console.log(newArray);
// Elzero