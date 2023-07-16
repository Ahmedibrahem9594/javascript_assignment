let myFetchData = fetch("/articles.json");

myFetchData.then((resovled)=> {
    console.log(resovled);
    return resovled.json();
}).then((data)=> {
    for(let i =0; i<= 5; i++) {
        let textData ="";
        let mainDiv = document.createElement("div");
        mainDiv.className = "data";
        let sectionDiv = document.createElement("div");
        mainDiv.appendChild(sectionDiv);
        textData += `       <h3>${data[i].title}</h3>
                            <p>${data[i].description}</p>`
        sectionDiv.innerHTML = textData;
        document.body.appendChild(mainDiv);
    } 
})