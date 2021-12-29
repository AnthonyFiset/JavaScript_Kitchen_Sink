// More Variables
var person = "Anthony";
const states = 50;
// When using the variable math it will automatically give the result of adding 5 + 4!!!    
var math = 5 + 4;

// Attempting a function

function sayHello() {
    alert("Hello World!");
}

sayHello();

// Second Function

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

let charles = {
    name: "Charles",
    age: 21
};

let abby = {
    name: "Abby",
    age: 27
};

let james = {
    name: "James",
    age: 18
};

let john = {
    name: "John",
    age: 17
};

checkAge(charles.name, charles.age);
checkAge(abby.name, abby.age);
checkAge(james.name, james.age);
checkAge(john.name, john.age);

// 