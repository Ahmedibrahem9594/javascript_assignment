let start = 0;
let swappedName = "elZerO";
let newArr = []
// Output
// "ELzERo"
for (let i = start; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toUpperCase()) {
        newArr.push(swappedName[i].toLowerCase());
    } else {
        newArr.push(swappedName[i].toUpperCase());
    }
}
console.log(newArr.join(""));