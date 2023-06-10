const myImg = document.querySelectorAll("img");

myImg.forEach((e) => e.getAttribute("alt") === null ? e.setAttribute("alt","Elzero New") :  e.setAttribute("alt","old"))
