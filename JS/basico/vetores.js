//ATRIBUIÇÕES
let array1 = [1, 2, 3];
let array2 = new Array(1, 2, 3);

console.log(array1, array2);

//ACESSAR UMA CÉLULA ESPECIFICA
console.log(array1[0]);

//ATRIBUIR A UMA CÉLULA ESPECIFICA
let array3 = [];
array3[3] = "JavaScript";
console.log(array3);

//VETORES COM DIFERENTES TIPOS
let array4 = [1, "EJCOMP", { name: "Gabriel" }];
console.log(array4);

//MANIPULANDO VETORES

//PUSH
let myStack = [];
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);

//POP
console.log(myStack.pop());
console.log(myStack);

//SHIFT
let myQueue = [];
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

console.log(myQueue.shift());
console.log(myQueue.shift());
console.log(myQueue.shift());

//UNSHIFT
let myArray = [1, 2, 3];
myArray.unshift(0);
console.log(myArray); // will print out 0,1,2,3

//MAP

let fruits = ["Banana", "Uva", "Maça"];

let newFruits = fruits.map((fruit) => (fruit[0] === "B" ? fruit : null));

console.log(newFruits);

//FOR EACH
let letters = ["a", "b", "c"];

letters.forEach((element) => console.log(element));
