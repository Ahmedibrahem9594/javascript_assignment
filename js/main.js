let myDiv = document.createElement("div");
myDiv.className = "container mt-5  shadow";
let myDivInput = document.createElement("div");
myDivInput.className = "row bg-light rounded";
myDiv.appendChild(myDivInput);
let myDivUser = document.createElement("div");
myDivUser.className = "col-6 p-5";
myDivInput.appendChild(myDivUser);
let inputUser = document.createElement("input");
inputUser.className = "form-control";
inputUser.type = "text";
inputUser.placeholder = "";
myDivUser.appendChild(inputUser);
let myDivEmail = document.createElement("div");
myDivEmail.className = "col-6 p-5";
myDivInput.appendChild(myDivEmail);
let inputEmail = document.createElement("input");
inputEmail.className = "form-control ";
inputEmail.type = "e-mail";
inputEmail.placeholder = "Enter Email";
myDivEmail.appendChild(inputEmail);
let mySubmitDiv = document.createElement("div");
mySubmitDiv.className = "col-12 text-center p-3";
myDivInput.appendChild(mySubmitDiv);
let mySubmit = document.createElement("input");
mySubmit.className = "btn btn-danger";
mySubmit.type = "submit";
mySubmit.value = "Save"
mySubmitDiv.appendChild(mySubmit);
document.body.appendChild(myDiv);
window.onload = function () {
    inputUser.focus();
}
inputUser.onfocus = function () {
    inputUser.placeholder = "";
}
inputUser.onblur = function () {
    inputUser.placeholder = "Enter Name In 10 Letters";
}
inputEmail.onfocus = function () {
    inputEmail.placeholder = "";
}
inputEmail.onblur = function () {
    inputEmail.placeholder = "Enter Name In 10 Letters";
}
let listItem = document.createElement("div");
let tbl = document.createElement("div");
let tblUser = document.createElement("span");
let tblEmail = document.createElement("span");
tbl.appendChild(tblUser);
tbl.appendChild(tblEmail);
tblUser.textContent = "User Name"
tblEmail.textContent = "E-mail"
tbl.className = "d-flex justify-content-between border-bottom border-dark py-2 px-2"
tblUser.className = "fw-bold text-light bg-dark rounded-pill px-3"
tblEmail.className = "fw-bold text-light bg-dark rounded-pill px-3"
listItem.appendChild(tbl);
listItem.className = "container bg-info mt-3 rounded shadow bg-gradient py-3"
listItem.id = "list-item"

document.body.appendChild(listItem);

//save btn
mySubmit.addEventListener("click", function(e) {
        e.preventDefault();
        if (inputUser.value != "" && inputEmail.value != "") {
            let tblData = document.createElement("div");
            let userSpan = document.createElement("span");
            let emailSpan = document.createElement("span");
            tblData.className = "d-flex justify-content-between border-bottom "
            userSpan.className = "fw-bold text-light bg-dark rounded-pill px-3 my-3"
            emailSpan.className = "fw-bold text-light bg-dark rounded-pill px-3 my-3"
            tblData.appendChild(userSpan);
            tblData.appendChild(emailSpan);
            listItem.appendChild(tblData);
            userSpan.textContent = inputUser.value.toUpperCase()
            emailSpan.textContent = inputEmail.value.toUpperCase()
            inputUser.value = ""
            inputEmail.value = ""
        } else {
            document.body.style.cssText = "background-color = #000000b3"
            myDiv.style.opacity = 0.4;
            listItem.style.opacity = 0.4;
            let popAlertDiv = document.createElement("div");
            let popStrong = document.createElement("strong");
            let popClick = document.createElement("input");
            popAlertDiv.style.cssText = "width: 400px; height: 400px; position:absolute; z-index:1000; left:50%; transform:translateX(-50%);border-radius:20px "
            popAlertDiv.className = "bg-dark d-flex flex-column justify-content-between p-5 text-light align-items-center "
            popClick.type = "submit"
            popClick.value = "OK"
            popClick.className = "btn btn-info"
            popStrong.textContent = "Please Enter Valid UserName Or Email";
            popAlertDiv.appendChild(popStrong);
            popAlertDiv.appendChild(popClick);
            document.body.prepend(popAlertDiv);
            popClick.addEventListener("click",function(e) {
                e.preventDefault();
                document.body.removeChild(popAlertDiv);
                myDiv.style.opacity = 1;
                listItem.style.opacity = 1;
            })
        }
})