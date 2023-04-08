//NUMBER
const myNumber = 3;

//STRING
const myString = "Hello, World!";

//BOOLEAN
const myBoolean = true;

// ARRAY
const myArray = [];

//OBJECT
const myObject = {};

//UNDEFINED
let novaVariavel;
console.log(novaVariavel); // undefined

//NULL
const emptyVariable = null;
console.log(emptyVariable);

//let - pode ser declarado novamente em diferentes escopos

// const - não pode ser declarado e atualizado novamente

//ERROR
const greeting = "say Hi";
greeting = "say Hello instead";

//ERROR
const greeting = "say Hi";
const greeting = "say Hello instead";

const objeto = {
  message: "say Hi",
  times: 4,
};

//OK
objeto.message = "say Hello instead";

console.log(objeto);
