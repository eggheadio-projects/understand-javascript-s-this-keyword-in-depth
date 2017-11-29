function Person(firstName, lastName) {
  console.log(this);
  this.firstName = firstName;
  console.log(this);
  this.lastName = lastName;
  console.log(this);
  
  // return this;
}

const person = new Person("Jane", "Doe");