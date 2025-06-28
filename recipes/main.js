import recipes from "./recipes.mjs";

function random (num){
    return Math.floor(Math.random()*num);
     
};
function recipe_list(array){
    const length = array.length;
    const index = random(length);
    return array[index];
};


function recipe_template(recipe){
 return `<figure>
            <img src="${recipe.image}" alt="${recipe.name}">
            <figcaption class="content">
                <a href="">dessert</a>
                <h2>${recipe.name}</h2>
                <span
	                    class="rating"
	                    role="img"
	                    aria-label="Rating: ${recipe.rating} out of 5 stars">
	                <span aria-hidden="true" class="icon-star">⭐</span>
	                <span aria-hidden="true" class="icon-star">⭐</span>
	                <span aria-hidden="true" class="icon-star">⭐</span>
	                <span aria-hidden="true" class="icon-star">⭐</span>
	                <span aria-hidden="true" class="icon-star-empty">☆</span>
                </span>
                <p>${recipe.description}</p>
            </figcaption>
        </figure>`
};
console.log(recipe_template(recipe_list(recipes)))
function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const main = document.getElementById("main");
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings

	// Set the HTML strings as the innerHTML of our output element.

}
