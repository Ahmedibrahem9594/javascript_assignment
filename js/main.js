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
                jsData[prop].section = "all";
            }
            console.log(jsData)
            JSON.stringify(jsData);
        }   
    }
}

getData()
