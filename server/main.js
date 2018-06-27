import { Meteor } from "meteor/meteor";
import { Players } from "./../imports/api/players";

Meteor.startup(() => {
  class Person {
    constructor(name = "Anonymous", age = 0) {
      this.name = name;
      this.age = age;
    }
    getGreeting() {
      return `Hi! I am ${this.name}.`;
    }
    getDescription() {
      return `${this.name} is ${this.age} year(s) old.`;
    }
  }

  class Programer extends Person {
    constructor(name, age, language) {
      super(name, age);
      this.language = language;
    }
    isDeveloper() {
      return !!this.language;
    }
    getGreeting() {
      if (this.language) {
        return `Hi! I am ${this.name}. My preferred language is ${
          this.language
        }`;
      } else {
        return super.getGreeting();
      }
    }
  }

  let me = new Programer("Rodrigo", 38, "JavaScript");
  console.log(me.getGreeting());

  let person = new Programer("Jack");
  console.log(person.getGreeting());
});
