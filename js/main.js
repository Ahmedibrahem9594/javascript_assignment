let userInput = window.prompt("Print Number From - to","Example: 5-20");
let newArray =  userInput.split("-");

if (newArray[0] > newArray[1]) {
    for(i = newArray[1] ; i <= newArray[0] ; i++  ) {
        console.log(i);
    }
} else if (newArray[0] < newArray[1]) {
    for(k = newArray[0] ; k <= newArray[1] ; k++ )
    console.log(k)
}