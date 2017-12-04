// "use strict";

// Part 1
function func() {
  console.log(this === undefined);
}

func();

// Part 2
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const person = Person("Jane", "Doe");
console.log(person);
console.log(window.firstName);
console.log(window.lastName);
