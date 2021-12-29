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

// Array of my favorite Vegetables

let vegetables = ["broccoli", "corn", "asparagus", "tomatoes", "cucumbers"];

for (let x = 0; x < vegetables.length; x++) {
    console.log(vegetables[x])
}

// Pet Name & Breed

let bruno = {
    name: "Bruno",
    breed: "Frenchie"
};

console.log(bruno.name, bruno.breed)

// More Friends

let nameAge = [
    { name: "Anthony", age: 23},
    { name: "Luis", age: 12},
    { name: "Felipe", age: 30},
    { name: "Brian", age: 20},
    { name: "Felix", age: 11},
];

for (let y = 0; y < nameAge.length; y++) {
    checkAge(nameAge[y].name, nameAge[y].age);
};

// Get Length Function

function getLength(word){
    return word.length;
};

let wordLength = getLength("Hello World");
if (wordLength % 2 == 0) {
    console.log("This world is nice & even!") } else {
        console.log("This world is an odd place!")
    }