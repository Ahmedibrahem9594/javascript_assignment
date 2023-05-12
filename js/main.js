let job = window.prompt("enter ur role :");
let holidays = window.prompt("enter ur holidays :");
let salary = 0;
let money = 0;

switch (job) {
  case "Manager" :
    salary = 8000;
    console.log(`Ur salary is : ${salary}`);
    break;
  case "IT" :
    salary = 6000;
    console.log(`Ur salary is : ${salary}`);
    break;
  case "Support" :
    salary = 6000;
    console.log(`Ur salary is : ${salary}`);
    break;
  case "Developer" :
    salary = 7000;
    console.log(`Ur salary is : ${salary}`);
    break;
  case "Designer" :
    salary = 7000;
    console.log(`Ur salary is : ${salary}`);
    break;
  default :
  salary = 4000;
  console.log(`Ur salary is : ${salary}`);
}

if (holidays == "0") {
  money = 5000;
  console.log(`Ur Money is ${money}`);
}
else if (holidays == "2") {
    money = 3000;
    console.log(`Ur Money is ${money}`);
}
else if (holidays == "3") {
    money = 2000;
    console.log(`Ur Money is ${money}`);
}
else if (holidays == "4") {
    money = 1000;
    console.log(`Ur Money is ${money}`);
}
else if (holidays == "5") {
    money = 0;
    console.log(`Ur Money is ${money}`);
}
else {
    money = 0;
    console.log(`Ur Money is ${money}`);
}