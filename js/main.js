let linkList = document.querySelectorAll("a");
Array.from(linkList).forEach(function(e) {
    if(e.classList.contains("open") && e.textContent === "Elzero") {
        e.click();
    }
})