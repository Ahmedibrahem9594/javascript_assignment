let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let regExp = /\d{4}:[a-z]{2}\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ig;
console.log(regExp.test(ip));