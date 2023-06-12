let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log(numsOne.concat(numsTwo))
console.log([...numsOne,...numsTwo])
console.log([].concat(numsOne).concat(numsTwo))
console.log(Array.from(numsOne.concat(numsTwo)))

// Needed Output
// [1, 2, 3, 4, 5, 6];