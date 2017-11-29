// Part 1
const person = {
  firstName: "John",
  sayHi() {
      console.log(`Hi, my name is ${this.firstName}!`);
  }
};

person.sayHi();

// Part 2
// const person = {
//   firstName: "John",
//   sayHi() {
//       console.log(`Hi, my name is ${this.firstName}!`);
//   }
// };

// const greet = person.sayHi;
// greet();