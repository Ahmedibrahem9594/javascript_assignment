const divOne = document.querySelector(".one");
const divTwo = document.querySelector(".two");
const divOneAttr = divOne.getAttribute("title");
const divTwoAttr = divTwo.getAttribute("title");
const divOneText = divOne.innerHTML
const divTwoText = divTwo.innerHTML
//change attr 
divOne.setAttribute("title",divTwoAttr);
divTwo.setAttribute("title",divOneAttr);
//change inner html
divOne.innerHTML = divTwoText
divTwo.innerHTML = `${divOneText} ${document.getElementsByTagName("div").length}`