//Populate species dropdown
var speciesSelect = document.getElementById("species");
var typeChoice = document.getElementById("animalType");
options = ["Ball Python", "Boa Constrictor", "Kingsnake", "Hognose Snake", "Reticulated Python"];

typeChoice.onchange = function() {

    console.log("working");

    speciesSelect.innerHTML = "";

    if (typeChoice.value === "Snake") {
        options = ["Ball Python", "Boa Constrictor", "Kingsnake", "Hognose Snake", "Reticulated Python"]
    } else if (typeChoice.value === "Lizard") {
        options = ["Leopard Gecko", "Bearded Dragon", "Skink", "Crested Gecko", "Tokay Gecko"]
    } else if (typeChoice.value === "Tortoise") {
        options = ["Spurred Tortoise", "Leopard Tortoise", "Greek Tortoise", "Red-Footed Tortoise"]
    } else {options = []}
    var specChoices
    console.log(options);
    for (var option of options) {
        specChoices += "<option>" + option + "</option>"
    }
    speciesSelect.innerHTML = specChoices;
}
