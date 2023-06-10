let myDivCounter = document.createElement("div");
let counter = 10;

let intervalCounter =  setInterval(function() {
    document.body.appendChild(myDivCounter);
    myDivCounter.innerHTML = counter;
    counter -= 1;
    counter < 0 ? clearInterval(intervalCounter) : "";
},1000);