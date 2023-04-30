console.group("group 1");
console.log("message one");
console.log("message two");
    console.groupCollapsed("child group");
    console.log("message one");
    console.log("message two");
        console.groupCollapsed("grand child group");
        console.log("message one");
        console.log("message two");
        console.groupEnd();
    console.groupEnd();
console.groupEnd();

console.group("group 2");
console.log("message one");
console.log("message two");