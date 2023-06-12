let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
let arr = [];
let bArr = [];

chars.forEach((e) => {
    if(isNaN(parseInt(e))) {
        arr.push(e);
    } else {
        bArr.push(e);
    }
})
let  newArr = arr.concat(bArr);
newArr.copyWithin(bArr.length);
console.log(newArr)
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']