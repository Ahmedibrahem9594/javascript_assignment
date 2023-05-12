let st = "Elzero Web School";

if (st.charAt(st.toLowerCase().indexOf("w")).toLowerCase() === "w") {
  console.log("Good");
}

if (st.charAt(st.toLowerCase().indexOf("w")).toLowerCase() !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if ( st.split(" ")[0].repeat(2) === "ElzeroElzero") {
  console.log("Good");
}