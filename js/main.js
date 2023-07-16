let getData = () => {
    const requests = new XMLHttpRequest();
    console.log(requests.readyState);
    requests.open("GET", "/articles.json");
    requests.send();
    requests.onreadystatechange = () => {
        if (requests.readyState === 4 && requests.status === 200) {
            console.log("JSON Object Content Here");
            console.log("Data Loaded");
        }       
    }
}

getData();