let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log(new Set(n1).size  * [].concat(n1).concat(n2).length * n1.shift() )
// Needed Output
// 210