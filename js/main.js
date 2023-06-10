// font-family: 'Cairo', sans-serif;
// font-family: 'Open Sans', sans-serif;
// font-family: 'Roboto', sans-serif;

const fontSelectors = document.querySelector("#font-select");
const colorSelectors = document.querySelector("#color");
const fontSizeSelectors = document.querySelector("#font-size");
const inputForm = document.querySelector("#text-input");
let optionEl = document.querySelectorAll("option");

//
//to uppercase for all content
optionEl.forEach((e)=> e.innerHTML = e.value.toUpperCase())


//condition to check local storage
if(window.localStorage.getItem("fontSizeLocal") || window.localStorage.setItem("fontFamilyLocal",fontFamilyLocal) || window.localStorage.setItem("colorLocal",colorLocal) ) {
    inputForm.style.fontSize = window.localStorage.getItem("fontSizeLocal");
    inputForm.style.fontFamily = window.localStorage.getItem("fontFamilyLocal");  
    inputForm.style.backgroundColor = window.localStorage.getItem("colorLocal");
}

//event on change
fontSizeSelectors.addEventListener("change",(e) => {
    const fontSizeLocal = e.target.value + "px" ;
    window.localStorage.setItem("fontSizeLocal",fontSizeLocal);
    inputForm.style.fontSize = window.localStorage.getItem("fontSizeLocal");  
}) 

//event on change
fontSelectors.addEventListener("change",(e) => {
    const fontFamilyLocal  = e.target.value;
    window.localStorage.setItem("fontFamilyLocal",fontFamilyLocal);
    inputForm.style.fontFamily = window.localStorage.getItem("fontFamilyLocal");  
})
//event on change
colorSelectors.addEventListener("change",(e) => {
    const colorLocal  = e.target.value;
    window.localStorage.setItem("colorLocal",colorLocal);
    inputForm.style.backgroundColor = window.localStorage.getItem("colorLocal");  
})


