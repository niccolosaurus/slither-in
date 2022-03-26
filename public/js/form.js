const { options } = require("../../models/User");

//Populate species dropdown
var speciesSelect = document.getElementById("species");
var typeChoice = document.getElementById("animalType");
options = ["Ball Python", "Boa Constrictor", "Kingsnake", "Hognose Snake", "Reticulated Python"];

typeChoice.onchange = function() {

    speciesSelect.innerHTML = "";

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
