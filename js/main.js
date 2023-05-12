let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let y = letter.length
for ( i = letter.indexOf("a") ; i < friends.length ; i++) {
  if (friends[i].toLowerCase().startsWith(letter)) {
    continue;
  }
  console.log(` ${y} =>  ${friends[i]}`);
  y++
}
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"