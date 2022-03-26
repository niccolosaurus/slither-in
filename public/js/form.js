//Populate species dropdown
var speciesSelect = document.getElementById("species");
var typeChoice = document.getElementById("animalType");
var options = [];

console.log(typeChoice.value);

typeChoice.onchange = function() {
    console.log("Changed")
    speciesSelect.innerHTML = "";

    console.log(typeChoice)

    if (typeChoice.value === "1") {
        options = ["Ball Python", "Boa Constrictor", "Kingsnake", "Hognose Snake", "Reticulated Python"]
    } else if (typeChoice.value === "2") {
        options = ["Leopard Gecko", "Bearded Dragon", "Skink", "Crested Gecko", "Tokay Gecko"]
    } else {
        options = ["Spurred Tortoise", "Leopard Tortoise", "Greek Tortoise", "Red-Footed Tortoise"]
    }
    var specChoices
    for (var option of options) {
        specChoices += "<option>" + option + "</option>"
    }
    speciesSelect.innerHTML = specChoices;
}
