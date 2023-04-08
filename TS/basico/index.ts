//npm install -g typescript
//npm install -g ts-node

let myName: string = "Alice";

let numero = 10;

let souMaiorDeIdade = true;

console.log(typeof myName);

// Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

// Would be a runtime error if executed!
greet(42);

//ENUM
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  console.log(recipient + message);
}

respond("Princess Caroline", UserResponse.Yes);

enum Direction {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

//Object Types
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

//Options properties
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

//Union

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101); //NUMBER
// OK
printId("202"); //STRING
// Error
printId({ myID: 22342 }); //OBJETO

//INTERFACE X TYPE

//INTERFACE
interface InterfaceAnimal {
  name: string;
}

interface InterfaceBear extends InterfaceAnimal {
  honey: boolean;
}

let ibear: InterfaceBear = { name: "João", honey: true };
ibear.name;

//TYPE
type TypeAnimal = {
  name: string;
};

type TypeBear = TypeAnimal & {
  honey: boolean;
};

let tbear: InterfaceBear = { name: "João", honey: true };
tbear.name;

tbear.name;
tbear.honey;

//INTERFACE
interface Point {
  x: number;
  y: number;
}

function printCoord2(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
