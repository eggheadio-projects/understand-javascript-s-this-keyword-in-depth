const person = {
  firstName: "John",
  sayHi() {
      console.log(`Hi, my name is ${this.firstName}!`);
  }
};

setTimeout(person.sayHi /* .bind(person) */, 1000);