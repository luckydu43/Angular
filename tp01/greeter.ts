function greeter(person: string) {
    return "Hello " + person;
}

let user = "luckydu43";
let hello = greeter(user);

console.log(hello)

//let hellonumber = greeter(42);
//console.log(hellonumber)

interface Humain {
    nom: string;
    skill: string;
  }
  
function greeterInterface (person:Humain) {
    return "Hello " 
    + person.nom 
    + " ayant un skill de type " 
    + person.skill;
}
  
var userInterfaced:Humain = { nom: "Luckydu43", skill: "Noob" };
  
console.log(greeterInterface(userInterfaced));