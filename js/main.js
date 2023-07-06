const myObj = {
  username: "elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

//Code

// configurable: true
// enumerable: true
// value: "elzero"
// writable: true

Object.defineProperty(myObj, "id", {
enumerable: false,
});

Object.defineProperty(myObj, "country", {
  enumerable: false,
  writable:false,
  configurable:true,
});

Object.defineProperty(myObj, "score", {
  configurable: false,
});

delete myObj.country;


myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
};

console.log(myObj);

//needed output

// "username => elzero"
// "score => 1000"
// {username: "elzero", score:1000, id:100}
