let addClass = document.querySelectorAll("input")[0];
let removeClass = document.querySelectorAll("input")[1];
let divTo = document.querySelector(".assign .classes-list div");

//add class 
addClass.addEventListener("blur",function(e) {
    let classValue = addClass.value;
    if(classValue != "") {
        classValue.split(" ").forEach(function(el) {
            let addSpan = document.createElement("span");
            addSpan.textContent = el;
            divTo.appendChild(addSpan);
            addClass.value = "";
        })
    } else {
        return false;
    }
})
//remove class 
removeClass.addEventListener("blur",function(ev) {
    let newRemoveClassValue = removeClass.value.split(" ");
    divToSpan = divTo.querySelectorAll("span")
    newArray =  Array.from(divToSpan).map(function(s) {
        return s;
    })
    for (i = 0 ; i < newRemoveClassValue.length ; i++) {
        console.log();
        console.log(newRemoveClassValue[i]);
        if (newArray[i].textContent.toLowerCase() === newRemoveClassValue[i].toLowerCase()) {
            newArray[i].remove();
            removeClass.value = "";
        }
    }
})