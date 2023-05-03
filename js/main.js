let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.split("")[0].toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.slice(-userName.length,1).toLowerCase()); // e
console.log(userName.substring(-userName.length,1).toLowerCase().repeat(3)); // eee