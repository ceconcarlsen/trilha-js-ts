let emptyObject = {};
let personObject = {
  firstName: "John",
  lastName: "Smith",
};

personObject.age = 23;
personObject["salary"] = 14000;

for (let member in personObject) {
  if (personObject.hasOwnProperty(member)) {
    console.log(
      "the member " + member + " of personObject is " + personObject[member]
    );
  }
}
