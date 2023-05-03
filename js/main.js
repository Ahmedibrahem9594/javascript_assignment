let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
// Find Smallest Number In All Variables And Return Integer
console.log(Math.min(a, b, c, d)); // 2
// Use Variables a + d One Time To Get The Needed Output
console.log( (a * Math.trunc(b)) / 2); // 10000
// Get Integer "2" From d Variable With 4 Methods
console.log(Math.trunc(d)); // 2
console.log(Math.round(d)); // 2
console.log(Math.floor(d)); // 2
console.log(Math.ceil(d) - 1); // 2
// Use Variables b + d To Get This Valus
console.log((( Math.sqrt(b/d) + 57.53 ).toString()).substring(0,5) ); // 66.67 => String
console.log(Math.round((( Math.sqrt(b/d) + 57.53 ).toString()).substring(0,5))); // 67 => Number