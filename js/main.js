let theName = "Elzero";
let newSet = [...theName]
let newSetS = Array.from(theName)
let newSetT = theName.split("")
let newSetF = theName.toString().split("") 
let newSetv = [...new Map(Object.entries( {theName})).values()].toString().split('') 
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']