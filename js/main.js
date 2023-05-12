let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
switch (day.trim()) {
  case "friday":
    console.log("not available in friday ");
    break;
  case "saturday":
    console.log("not available in saturday ");
    break;
  case "sunday":
    console.log("not available in sunday ");
    break;
    default :
    console.log("Available");
}
// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"
switch (day.trim()) {
  case "friday":
    console.log("not available in friday ");
    break;
  case "saturday":
    console.log("not available in saturday ");
    break;
  case "sunday":
    console.log("not available in sunday ");
    break;
    default :
    console.log("Available");
}
// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"
switch (day.trim()) {
  case "monday":
    console.log("From 10:00 AM To 5:00 PM ");
    break;
  case "thursday":
    console.log("From 10:00 AM To 5:00 PM ");
    break;
    default :
    console.log("not available in specific day");
}
// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"
switch (day.trim()) {
  case "tuesday":
    console.log("From 10:00 AM To 5:00 PM ");
    break;
    default :
    console.log("not available in specific day");
}
// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"
switch (day.trim()) {
  case "wednesday":
    console.log("From 10:00 AM To 5:00 PM ");
    break;
    default :
    console.log("not available in specific day");
}
// let day = "World";
// // Output => "Its Not A Valid Day"
switch (day.trim()) {
  case "wednesday":
    console.log("From 10:00 AM To 5:00 PM ");
    break;
    default :
    console.log("Its Not A Valid Day");
}