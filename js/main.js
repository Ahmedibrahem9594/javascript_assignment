let myString = "EElllzzzzzzzeroo";
let newMyString = myString.split("").filter(function (ele, indx) {
    return myString.indexOf(ele) === indx;
}).reduce(function (acc, curr) {
    return `${acc}${curr}`
});
console.log(newMyString);
// Elzero