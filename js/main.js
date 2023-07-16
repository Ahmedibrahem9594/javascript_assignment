let getData = () => {
    const requests = new XMLHttpRequest();
    console.log(requests.readyState);
    requests.open("GET", "/articles.json");
    requests.send();
    requests.onreadystatechange = () => {
        if (requests.readyState === 4 && requests.status === 200) {
            let data = requests.responseText;
            let jsData =  JSON.parse(data);
            for (let prop in jsData) {
                let textData ="";
                let mainDiv = document.createElement("div");
                mainDiv.className = "data";
                let sectionDiv = document.createElement("div");
                mainDiv.appendChild(sectionDiv);
                textData += `       <h2>${jsData[prop].article_title}</h2>
                                    <p>${jsData[prop].article_content}</p>
                                    <p>${jsData[prop].author.toUpperCase()}</p>
                                    <p>${jsData[prop].section.toUpperCase()}</p>`
                sectionDiv.innerHTML = textData;
                document.body.appendChild(mainDiv);
            }
            console.log(jsData);
            
        
        }   
    }
}

getData()
