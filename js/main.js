let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("founded");
}
if (haystack[1] == needle ) {
  console.log("founded");
}
haystack.shift();
haystack.pop()
if (haystack == needle ) {
  console.log("founded");
}