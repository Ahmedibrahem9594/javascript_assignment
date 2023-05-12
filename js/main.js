let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
//solution one
my.pop() ; my.pop(); my.reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];
//solution two
console.log(my.slice(++zero,counter).reverse()); // ["Elham", "Mazero"]
// solution three
console.log(my[--counter].substring(zero,counter) + my[--counter].slice(++counter)); // "Elzero"
// solution four
console.log(my[(++counter + true)].slice(counter)+my[++zero].slice(++counter).toUpperCase()); // "rO"