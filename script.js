
const table = document.getElementById("recipeTable");

let totalRecipes = 6;
let columns = 3;

for (let i = 0; i < totalRecipes; i++) {
    if (i % columns === 0) {
        var row = table.insertRow();
    }
    let cell = row.insertCell();

    let link = document.createElement("a");
    link.href = "recipe" + (i + 1) + ".html";

    let img = document.createElement("img");
    img.src = `Images/recipe${i + 1}.png`;
    img.alt = "Recipe " + (i + 1);

        link.appendChild(img);
        cell.appendChild(link);
}