const myInput = document.querySelector("input[type = number]");
const myDiv = document.querySelector(".result");

myInput.addEventListener("change",(e) => myDiv.innerHTML = `${e.target.value} USD Dollar = ${(e.target.value * 15.6).toFixed(2)} Egyptian Pound`);