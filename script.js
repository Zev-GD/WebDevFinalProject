
const table = document.getElementById("recipeTable");

if (table) {

let totalRecipes = 9;
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
}

const recipeName = document.getElementById('recipeName');
const recipeImage = document.getElementById('recipeImage');
const recipeLink = document.getElementById('recipeLink');
const button = document.getElementById('randomButton');

let recipes = [];

fetch("https://raw.githubusercontent.com/Zev-GD/WebDevFinalProject/refs/heads/main/recipes.json") 
    .then(res => res.json())
    .then(data => {
        recipes = data;
       
    })
    .catch(err => { 
        recipeName.textContent = 'Could not load recipe.';
        console.error(err); 
    });


function showRandomRecipe() {
    if (recipes.length === 0) {
        return;
    }
    
    const display = document.getElementById("randomdisplay");
    const randomIndex = Math.floor(Math.random() * recipes.length);


    const selected = recipes[randomIndex];
    recipeName.textContent = selected.name;
    recipeImage.src = selected.image;
    recipeImage.alt = selected.name;
    recipeLink.href = selected.link;

    display.classList.remove('hide');


   
}
button.addEventListener('click', showRandomRecipe);