function ageInTime(theAge) {
        if (theAge > 100 || theAge < 10) {
                console.log("Age Out Of Range");
        } else {
                console.log("Your Age In Months " + theAge * 12);
                console.log("Your Age In Weeks " + theAge * 12 * 4);
                console.log("Your Age In Days " + theAge * 12 * 4 * 7);
                console.log("Your Age In Hours " + theAge * 12 * 4 * 7 * 24);
        }
}
      // Needed Output
      ageInTime(110); // Age Out Of Range
      ageInTime(38); // Months Example => 456 Months