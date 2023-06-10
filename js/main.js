const myForm = document.querySelector("form");
const numberElement = document.querySelector("[name=elements]");
const textElement = document.querySelector("[name=texts]");
const selectors = document.querySelector("select");
const divSelect = document.querySelector("select option[value = Div]");
const sectionSelect = document.querySelector("select option[value = Section]");
const submitSelect = document.querySelector("input[type = submit]");
const resultsDiv = document.querySelector(".results");
//CSS Styling
myForm.style.cssText = "background-color:#9d9d9d;border-radius:30px; width:400px; height:200px; padding:10px; margin:0 auto;";
numberElement.style.cssText = "width:350px; height:30px; font-size:20px; border-radius:30px; border:none; padding:0 20px; margin:10px auto";
textElement.style.cssText = "width:350px; height:30px; font-size:20px; border-radius:30px; border:none; padding:0 20px; margin:10px auto";
selectors.style.cssText = "width:200px; height:40px; margin:0 auto; display:block; font-size:20px";
submitSelect.style.cssText = "background-color:#009688; border:none; border-radius:30px; font-size:30px; padding:5px 30px; margin:10px auto; display:block; cursor:pointer; color:white;";
resultsDiv.style.cssText = "background-color:#7777; border-radius:20px; display:flex;flex-wrap:wrap; gap:10px; margin:50px auto; padding:10px"
//

submitSelect.addEventListener("click",function(e) {
    e.preventDefault();
    resultsDiv.innerHTML = "";
    for(let i =0; i < numberElement.value ; i++) {
            let newElement = document.createElement(selectors.value);
            newElement.innerHTML = textElement.value;
            newElement.className = "box";
            newElement.id = `id${i + 1}`;
            newElement.style.cssText = "background-color:orange; border-radius:30px; font-size:20px; padding:5px 20px; "
            resultsDiv.appendChild(newElement);
    }
});
