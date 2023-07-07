let birthDate = new Date("5-9-1994");
let currentDate = new Date();

let diff = currentDate.getTime() - birthDate.getTime();

let ageSeconds =  diff/1000;
console.log(ageSeconds, "Seconds");
console.log("#".repeat(50));
let ageMinutes =  ageSeconds/60;
console.log(ageMinutes, "Minutes");
console.log("#".repeat(50));
let ageDays =  ageMinutes/60;
console.log(ageDays, "Days");
console.log("#".repeat(50));
let ageMonths =  ageDays/24;
console.log(ageMonths, "Months");
console.log("#".repeat(50));
let ageYears = ageMonths/365;
console.log(ageYears, "Years");



// Needed Output
"1247939400 Seconds"
"20798990 Minutes"
"346650 Hours"
"14444 Days"
"481 Months"
"40 Years"