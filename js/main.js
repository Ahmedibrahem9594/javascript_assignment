function getDetails(zName,zAge,zCountry) {
    function namePattern(zName) {
        return (`${zName.split(" ")[0].toUpperCase()} ${zName.split(" ")[1].charAt(0).toUpperCase()}.`)
    }
    function ageWithMessage(zAge) {
        return (`${zAge.split(" ")[0]}`);
    }
    function countryTwoLetters(zCountry) {
        return (`${zCountry.substring(0,2).toUpperCase()}`)
    }
    function fullDetails() {
        return ("Hello " +  namePattern(zName) + ", Your age is " + ageWithMessage(zAge) + ", You Live in "  + countryTwoLetters(zCountry) );
    }
    return fullDetails()
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));