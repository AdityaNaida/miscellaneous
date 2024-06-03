//Factory function

// function personMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`I'm ${this.name} and I'm ${this.age} years old.`);
//     },
//   };

//   return person;
// }

//constructor function

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.talk = function () {
//   console.log(`${this.name} is ${this.age} years old`);
// };

// let p1 = new Person("aditya", 19);
// let p2 = new Person("Surangana", 20);

//class this is the right method to use

// class Person {
//   constructor(name, number) {
//     this.name = name;
//     this.ticketNumber = number;
//   }

//   book() {
//     alert(
//       `${this.name} booked the train and his ticket number is ${this.ticketNumber}`
//     );
//   }
//   cancle() {
//     alert(
//       `${this.name} cancle the train and his ticket number is ${this.ticketNumber}`
//     );
//   }
// }

// let p1 = new Person("Aditya", 369);
// let p2 = new Person("Surangana", 369);

//Inteheritance

class Person {
  constructor(name, age) {
    console.log("Person Constructor");
    this.name = name;
    this.age = age;
  }

  talk() {
    console.log("Hello I'm " + this.name);
  }
}

class Student extends Person {
  constructor(name, age, marks) {
    console.log("Student Constructor");
    super(name, age);
    this.marks = marks;
  }
}

let stu1 = new Student("Aditya", 19, 89);
let stu2 = new Student("Surangana", 20, 80);

class Teachers extends Person {
  constructor(name, age, subject) {
    console.log("Teacher Constructor");
    super(name, age);
    this.subject = subject;
  }
}

let tec1 = new Teachers("Prasun Roy", 40, "Computer Application");
