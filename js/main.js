// function Car(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
// }

//convert class syntax
class Car {
    constructor (name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run() {
        return ("Car Is Running Now");
    }
    stop() {
        return (" Car Is Stopped");
    }
    info() {
        return (`Car One Name Is ${this.n} And Model IS ${this.m} And Price IS ${this.p}`);
    }
}

let car1 = new Car("MG","2022","420000");
console.log(car1.info());
console.log(car1.run());
// Needed Output
//"Car One Name Is MG And Model Is 2022 And Price Is 420000"
//"Car Is Running Now"
