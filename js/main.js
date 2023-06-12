let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
let newSetName = new Set(myFriends);
console.log((newSetName.size), (Array.from(newSetName).sort()))
// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']