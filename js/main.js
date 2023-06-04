//Create Elements
let myDiv = document.createElement("div");
let myDivInfo = document.createElement("div");
let myFirstP = document.createElement("p");
let mySecondP = document.createElement("p");
let myClose = document.createElement("span");


//Text Content To P 
myFirstP.textContent = "Welcome";
mySecondP.textContent = "Welcome To Elzero Web School";

//style of p
myFirstP.style.cssText = "font-weight:bold; font-size:30px;"
mySecondP.style.cssText = "font-size:20px;"

//text to span
myClose.textContent = "X";

//style of span
myClose.style.cssText = "background-color: red; border-radius:50%; padding:8px; color:white; position:absolute; top:-10px; right:-10px; cursor:pointer"

//append P to Div 
myDivInfo.appendChild(myFirstP);
myDivInfo.appendChild(mySecondP);

//style of info div
myDivInfo.style.cssText = "display:flex; justify-content:center; flex-direction:column; align-items:center"

//append all to main div
myDiv.appendChild(myDivInfo);
myDiv.appendChild(myClose);

//style of main div
myDiv.style.cssText = "background-color:#7777; width:600px; border-radius:10px; position:relative; margin:50px auto; display:none;"

//append main div to body
document.body.appendChild(myDiv);

setTimeout(function() {
    myDiv.style.display = "block";
},3000);

myClose.addEventListener("click", function(e) {
    myDiv.style.display = "none";
})