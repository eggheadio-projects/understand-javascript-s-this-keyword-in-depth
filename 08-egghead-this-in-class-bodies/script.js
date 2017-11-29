// Part 1
class Person {
  constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
  }

  sayHi() {
      console.log(`Hi, my name is ${this.firstName}!`);
  }
}

const person = new Person("John", "Doe");
person.sayHi();

// Part 2
// class Person {
//   sayHi = () => {
//       console.log(`Hi, my name is ${this.firstName}!`);
//   };

//   constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//   }
// }

// const person = new Person("John", "Doe");
// const greet = person.sayHi;
// greet();