let myDivCounter = document.createElement("div");
let counter = 10;

let intervalCounter =  setInterval(function() {
    document.body.appendChild(myDivCounter);
    myDivCounter.innerHTML = counter;
    counter -= 1; 
    counter === 5  ? window.open("https://elzero.org/","_blank","width=300, height=300, left=0, top=0"): "";
    counter < 0 ? clearInterval(intervalCounter) : "";
},1000);