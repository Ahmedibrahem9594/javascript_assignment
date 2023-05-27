let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let newNums =  numsAndStrings.filter(function (ele) {
    return !isNaN(parseInt(ele));
}).map(function (ele) {
    return -ele;
}).join(" ").split(" ")
console.log(newNums)
// [-1, -10, 10, 20, -5, -3]