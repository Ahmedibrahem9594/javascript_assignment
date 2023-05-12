let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
//solution one
my.pop() ; my.pop(); my.reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];
//solution two
console.log(my.slice(++zero,counter).reverse()); // ["Elham", "Mazero"]
// solution three
console.log(my[2].substring(0,2) + my[1].slice(2)); // "Elzero"
// solution four
console.log(my[5].slice(4)+my[1].slice(5).toUpperCase()); // "rO"