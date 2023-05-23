function checkStatus(a, b, c) {
        if (typeof a === "string" && typeof b === "number" && c === true) {
                console.log(`Hello ${a}, Your Age Is ${b}, You Are Availabe For Hire`);
        } else if (typeof a === "string" && typeof b === "number" && c === false) {
                console.log(`Hello ${a}, Your Age Is ${b}, You Are Not Availabe For Hire`);
        } else if (typeof a === "number" && typeof b === "string" && c === true) {
                console.log(`Hello ${b}, Your Age Is ${a}, You Are Availabe For Hire`);
        } else if (typeof a === "number" && typeof b === "string" && c === false) {
                console.log(`Hello ${b}, Your Age Is ${a}, You Are Not Availabe For Hire`);
        } else if (a === true && typeof b === "number" && typeof c === "string") {
                console.log(`Hello ${c}, Your Age Is ${b}, You Are Availabe For Hire`);
        } else if ( a === false && typeof b === "number" && typeof c === "string") {
                console.log(`Hello ${c}, Your Age Is ${b}, You Are Not Availabe For Hire`);
        } else if ( a === true && typeof b === "string" && typeof c === "number") {
                console.log(`Hello ${b}, Your Age Is ${c}, You Are Not Availabe For Hire`);
        } else if ( a === false && typeof b === "string" && typeof c === "number") {
                console.log(`Hello ${b}, Your Age Is ${c}, You Are Not Availabe For Hire`);
        } else {
                console.log("aaa")
        }
}
      // Needed Output
      checkStatus("Osama", 50, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
      checkStatus(60, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
      checkStatus(true, 40, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
      checkStatus(false, "Osama", 42); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"