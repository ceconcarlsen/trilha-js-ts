// OBJECT
const person = {
  head: {
    eyes: "x",
    mouth: {
      teeth: "x",
      tongue: "x",
    },
  },
  body: {
    shoulders: "x",
    chest: "x",
    arms: "x",
    hands: "x",
    legs: "x",
  },
};

// ES6 Destructuring
let { head } = person;

// So we can do...
console.log(head);

//ARRAY

let numbers = ["2", "3", "7"];

// ES6 Destructuring
let [two, three, seven] = numbers;

console.log(two, three, seven);
