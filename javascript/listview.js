const recipeContainer = document.querySelector("#recipeContainer");

async function hentOpskrifter() {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();

  visOpskrifter(data.recipes);
}

function visOpskrifter(recipes) {
  recipeContainer.innerHTML = "";

  recipes.forEach((recipe) => {
    recipeContainer.innerHTML += `
            <article class="recipe-card">

                ${recipe.image}

                <h3>${recipe.name}</h3>

                <p>${recipe.cuisine}</p>

                <p>${recipe.difficulty}</p>

            </article>
        `;
  });
}
container.innerHTML += `
<article class="recipe-card">

    ${recipe.image}

    <h3>${recipe.name}</h3>

    <p>${recipe.cuisine}</p>

</article>
`;
