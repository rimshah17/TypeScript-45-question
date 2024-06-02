//Q1
//Install Node.js, TypeScript and VS Code on your computer.
//its done
// Q2 
console.log("// Q2");
let personName: string = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

// Q3
console.log("// Q3");
let personNameTwo: string = "John Doe";

// Lowercase
let lowercaseName: string = personNameTwo.toLowerCase();
console.log("Lowercase: " + lowercaseName);

// Uppercase
let uppercaseName: string = personNameTwo.toUpperCase();
console.log("Uppercase: " + uppercaseName);

// Titlecase 
let titlecaseName: string = personNameTwo.replace(/\b\w/g, c => c.toUpperCase());
console.log("Titlecase: " + titlecaseName);

// Q4
console.log("// Q4");
let quote: string = "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";

console.log(`${author} once said, "${quote}"`);

// Q5
console.log("// Q5");
let famous_person: string = "Albert Einstein";
let quoteTwo: string = "A person who never made a mistake never tried anything new.";
let message: string = `${famous_person} once said, "${quoteTwo}"`;
console.log(message);

// Q6
console.log("// Q6");
let nameWithWhitespace: string = "\t\n  John Doe \t\n";
console.log("Name with whitespace: " + nameWithWhitespace);
let strippedName: string = nameWithWhitespace.trim();
console.log("Stripped name: " + strippedName);

// Q7
console.log("// Q7");
console.log("Addition: " + (5 + 3));
console.log("Subtraction: " + (10 - 2));
console.log("Multiplication: " + (4 * 2));
console.log("Division: " + (16 / 2));

// Q8
console.log("// Q8");
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// Q9
console.log("// Q9");
let favoriteNumber: number = 7;
console.log("My favorite number is: " + favoriteNumber);

// Q10
// Adding Comments:
// This program displays arithmetic operations and reveals my favorite number.

// Q11
console.log("// Q11");
let names: string[] = ["Alice", "Bob", "Charlie"];
for (let name of names) {
    console.log(name);
}

// Q12
console.log("// Q12");
for (let name of names) {
    console.log(`Hello, ${name}!`);
}

// Q13
console.log("// Q13");
let transportation: string[] = ["car", "motorcycle", "bicycle"];
for (let item of transportation) {
    console.log(`I would like to own a ${item}.`);
}

// Q14
console.log("// Q14");
let guests: string[] = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie"];
for (let guest of guests) {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
}

// Q15
console.log("// Q15");
let unableToAttend = guests.shift();
console.log(unableToAttend + " can't make it to the dinner.");
guests.push("Nikola Tesla");
for (let guest of guests) {
    console.log("Dear " + guest + ", you are cordially invited to dinner.");
}

// Q16
console.log("// Q16");
console.log("We found a bigger dinner table!");
guests.unshift("Isaac Newton");
guests.splice(Math.floor(guests.length / 2), 0, "Galileo Galilei");
guests.push("Thomas Edison");
for (let guest of guests) {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
}

// Q17
console.log("// Q17");
console.log("Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.");

while (guests.length > 2) {
    let removedGuest: string = guests.pop()!;
    console.log(`Sorry, ${removedGuest}, you're no longer invited.`);
}

for (let guest of guests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}

guests.pop();
guests.pop();
console.log("Empty list:", guests);

// Q18
console.log("// Q18");
let placesToVisit: string[] = ["Paris", "Tokyo", "New York", "Rome", "Rio de Janeiro"];

console.log("Original order:", placesToVisit);

console.log("Alphabetical order:", [...placesToVisit].sort());

console.log("Original order:", placesToVisit);

console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

console.log("Original order:", placesToVisit);

placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

placesToVisit.reverse();
console.log("Original order:", placesToVisit);

console.log("Alphabetical order:", placesToVisit.sort());

console.log("Reverse alphabetical order:", placesToVisit.sort().reverse());

// Q19
console.log("// Q19");
console.log(`Dinner Guests: There are ${guests.length} people invited to dinner.`);

// Q20
console.log("// Q20");
let favoriteThings: string[] = ["mountains", "rivers", "countries", "cities", "languages"];
console.log("Favorite things:", favoriteThings);

// Q21
console.log("// Q21");
let myObjects: { [key: string]: string }[] = [
    { item: "mountain", description: "a large natural elevation of the earth's surface" },
    { item: "river", description: "a large natural stream of water flowing in a channel to the sea, a lake, or another such stream" },
    { item: "country", description: "a nation with its own government, occupying a particular territory" }
];
console.log("Objects:", myObjects);

// Q22
console.log("// Q22");
let someArray: string[] = ["a", "b", "c"];
// Uncomment the line below to generate an index error
// console.log(someArray[3]);

// Q23
// Define a variable
let age: number = 25;

// Test 1: Is the age greater than 18?
console.log("Is age > 18? I predict True.");
console.log(age > 18); // True

// Test 2: Is the age less than or equal to 30?
console.log("Is age <= 30? I predict True.");
console.log(age <= 30); // True

// Test 3: Is the age exactly equal to 25?
console.log("Is age === 25? I predict True.");
console.log(age === 25); // True

// Test 4: Is the age not equal to 20?
console.log("Is age !== 20? I predict True.");
console.log(age !== 20); // True

// Test 5: Is the age between 20 and 30?
console.log("Is age > 20 && age < 30? I predict True.");
console.log(age > 20 && age < 30); // True

// Test 6: Is the age less than 18?
console.log("Is age < 18? I predict False.");
console.log(age < 18); // False

// Test 7: Is the age greater than 30?
console.log("Is age > 30? I predict False.");
console.log(age > 30); // False

// Test 8: Is the age exactly equal to 30?
console.log("Is age === 30? I predict False.");
console.log(age === 30); // False

// Test 9: Is the age not equal to 25?
console.log("Is age !== 25? I predict False.");
console.log(age !== 25); // False

// Test 10: Is the age between 25 and 30?
console.log("Is age >= 25 && age <= 30? I predict True.");
console.log(age >= 25 && age <= 30); // True

// Q24

// Test whether an item is in an array
let fruits: string[] = ["apple", "banana", "orange"];

console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.indexOf("banana") !== -1); // True

console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.indexOf("grape") !== -1); // False

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(fruits.indexOf("grape") === -1); // True

console.log("Is 'apple' not in the fruits array? I predict False.");
console.log(fruits.indexOf("apple") === -1); // False

// Q25
// Alien Colors #1
let alien_color = 'green';

// Passing the if test
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the green alien.");
}

// Failing the if test (no output)

// Q26
// Alien Colors #2
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the green alien.");
} else {
    console.log("The player just earned 10 points.");
}

// Q27
console.log("// Q27");
if (alien_color === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color === 'red') {
    console.log("The player earned 15 points.");
}
// Q28
console.log("// Q28");
let agePerson: number = 20;

if (agePerson < 2) {
    console.log("The person is a baby.");
} else if (agePerson >= 2 && agePerson < 4) {
    console.log("The person is a toddler.");
} else if (agePerson >= 4 && agePerson < 13) {
    console.log("The person is a kid.");
} else if (agePerson >= 13 && agePerson < 20) {
    console.log("The person is a teenager.");
} else if (agePerson >= 20 && agePerson < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

// Q29
console.log("// Q29");
let favoriteFruits: string[] = ["banana", "apple", "mango"];

if (favoriteFruits.indexOf("banana") !== -1) {
    console.log("You really like bananas!");
}
if (favoriteFruits.indexOf("apple") !== -1) {
    console.log("You really like apples!");
}
if (favoriteFruits.indexOf("mango") !== -1) {
    console.log("You really like mangos!");
}
if (favoriteFruits.indexOf("grape") !== -1) {
    console.log("You really like grapes!");
}
if (favoriteFruits.indexOf("orange") !== -1) {
    console.log("You really like oranges!");
}

// Q30
console.log("// Q30");
let usernames: string[] = ["admin", "Eric", "John", "Jane", "Alice"];

for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

// Q31
console.log("// Q31");
usernames = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
}

// Q32
console.log("// Q32");
let currentUsers: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
let newUsers: string[] = ["alice", "Frank", "George", "eve", "Hannah"];

for (let newUser of newUsers) {
    if (currentUsers.map(user => user.toLowerCase()).indexOf(newUser.toLowerCase()) !== -1) {
        console.log(`The username ${newUser} is already taken, please enter a new username.`);
    } else {
        console.log(`The username ${newUser} is available.`);
    }
}

// Q33
console.log("// Q33");
let ordinalNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let ordinal of ordinalNumbers) {
    if (ordinal === 1) {
        console.log(`${ordinal}st`);
    } else if (ordinal === 2) {
        console.log(`${ordinal}nd`);
    } else if (ordinal === 3) {
        console.log(`${ordinal}rd`);
    } else {
        console.log(`${ordinal}th`);
    }
}

// Q34
console.log("// Q34");
let pizzaTypes: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

for (let pizza of pizzaTypes) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");

// Q35
console.log("// Q35");
let animals: string[] = ["dog", "cat", "rabbit"];

for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");

// Q36
console.log("// Q36");

// Making Shallow Copies of List and Modifying Them
let myFoods: string[] = ["pizza", "falafel", "carrot cake"];
let friendFoods: string[] = [...myFoods];
myFoods.push("cannoli");
friendFoods.push("ice cream");

console.log("My favorite foods are:");
for (let food of myFoods) {
    console.log(food);
}

console.log("My friend's favorite foods are:");
for (let food of friendFoods) {
    console.log(food);
}

// Q37
console.log("// Q37");

// A function to create and display a list of magician names
let magicians: string[] = ["Houdini", "Blaine", "Copperfield"];

function showMagicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
showMagicians(magicians);

// Q38
console.log("// Q38");

// A function to add "the Great" to each magician's name
function makeGreat(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}

let greatMagicians = makeGreat([...magicians]);
showMagicians(greatMagicians);
showMagicians(magicians);

// Q39
console.log("// Q39");

// A function to create and display a list of magician names
function showMagiciansNew(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Q40
console.log("// Q40");

let magicianNames: string[] = ["Houdini", "Blaine", "Copperfield"];

showMagiciansNew(magicianNames);
let greatMagicianNames: string[] = makeGreat([...magicianNames]);
showMagiciansNew(greatMagicianNames);
showMagiciansNew(magicianNames);

// Q41
console.log("// Q41");

function makeSandwich(...items: string[]) {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Sandwich is ready!\n");
}

makeSandwich("lettuce", "tomato", "bacon");
makeSandwich("turkey", "cheese");
makeSandwich("peanut butter", "jelly", "banana");

// Q42
console.log("// Q42");

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function makeCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (let [key, value] of options) {
        car[key] = value;
    }
    return car;
}

let myCar = makeCar("Toyota", "Camry", ["color", "blue"], ["sunroof", true]);
console.log(myCar);

let anotherCar = makeCar("Honda", "Accord", ["color", "black"], ["gps", true], ["warranty", "3 years"]);
console.log(anotherCar);

// Q43
console.log("// Q43");
let car2 = makeCar("Subaru", "Outback", ["color", "green"], ["tow package", true]);
console.log(car2);

// Q44
console.log("// Q44");
let car3 = makeCar("BMW", "X5", ["color", "white"], ["gps", true], ["heated seats", true]);
console.log(car3);

// Q45
console.log("// Q45");
let car4 = makeCar("Audi", "Q7", ["color", "black"], ["gps", true], ["sunroof", true], ["warranty", "5 years"]);
console.log(car4);
