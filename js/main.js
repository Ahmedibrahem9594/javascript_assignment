const fontSelectors = document.querySelector("#gov");
const inputName = document.querySelector("#text-Name");
const inputPhone = document.querySelector("#text-Phone");
const inputDegree = document.querySelector("#text-Degree");
let optionEl = document.querySelectorAll("option");
const selectGov = document.querySelector("select");
//
//to uppercase for all content
optionEl.forEach((e)=> e.innerHTML = e.value.toUpperCase())


//condition to check local storage
if (localStorage.getItem("Name") || localStorage.getItem("Phone") || localStorage.getItem("Degree") || localStorage.getItem("Gov")  ) {
    inputName.value = localStorage.getItem("Name") ;
    inputPhone.value = localStorage.getItem("Phone");
    inputDegree.value = localStorage.getItem("Degree");
    selectGov.value = localStorage.getItem("Gov");
}
//event on change
inputName.addEventListener("change",(e) => {
    const nameLocal =  e.target.value;
    localStorage.setItem("Name",nameLocal);
})
inputPhone.addEventListener("change",(e) => {
    const phoneLocal =  e.target.value;
    localStorage.setItem("Phone",phoneLocal);
})
inputDegree.addEventListener("change",(e) => {
    const degreeLocal =  e.target.value;
    localStorage.setItem("Degree",degreeLocal);
})
selectGov.addEventListener("change",(e) => {
    const govLocal =  e.target.value;
    localStorage.setItem("Gov",govLocal);
})

window.onload = () => localStorage.clear()
