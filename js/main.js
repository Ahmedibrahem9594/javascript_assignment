//First Div
let firstElement = document.querySelector(".our-element");
firstElement.className = "start";
firstElement.setAttribute("title","Start element");
firstElement.setAttribute("data-value","Start");
firstElement.innerHTML = "Start";
//Remove p
document.querySelector("p").remove();
//Second Div 
let secondElement = document.createElement("div");
secondElement.className = "our-element";
secondElement.innerHTML = secondElement.className;
document.body.querySelector(".start").after(secondElement)
//Third Div
let thirdElement = document.createElement("div");
thirdElement.className = "end";
thirdElement.setAttribute("title","end element");
thirdElement.setAttribute("data-value","end");
thirdElement.innerHTML = "end";
document.body.querySelector(".our-element").after(thirdElement)