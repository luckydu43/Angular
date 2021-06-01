function greeter(person) {
    return "Hello " + person;
}
var user = "luckydu43";
var hello = greeter(user);
console.log(hello);
function greeterInterface(person) {
    return "Hello "
        + person.nom
        + " ayant un skill de type "
        + person.skill;
}
var userInterfaced = { nom: "Luckydu43", skill: "Noob" };
console.log(greeterInterface(userInterfaced));
