let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

for(let i = index; i < friends.length; i++) {
        if (Number.isInteger(friends[i]) || friends[i].charAt(0) === "A") {
                continue;
        } else {
                counter++;
                console.log(`${counter} => ${friends[i]}`);
        }
}
while (friends[index]) {
        index++;
        if (friends[index].toString().startsWith("S")) {
                counter++;
                console.log(`${counter} ==> ${friends[index]}`);
        } else if (friends[index].toString().startsWith("M")) {
                console.log(`${counter} ==> ${friends[index]}`);
                break;
        }
}
// Output
// "1 => Sayed"
// "2 => Mahmoud"