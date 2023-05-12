let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
// Method 1

myFriends.pop();
console.log(myFriends);
myFriends.push("Gamal");

// Method 2

let aaa =  myFriends.slice( (myFriends.length - myFriends.length) , num);
console.log(aaa); // ["Ahmed", "Elham", "Osama"];