let newDate = new Date();


console.log(new Date(newDate.setDate(-30)));
console.log(`Previous Month Is April And Last Day IS ${new Date(newDate.setDate(-30)).getDate()}`)


// Needed Output
"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is April And Last Day Is 30"

