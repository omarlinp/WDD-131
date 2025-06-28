import recipes from "./recipes.mjs";

function random (num){
    return Math.floor(Math.random()*num);
     
};
function getRandomListEntry(array){
    const length = array.length;
    const index = random(length);
    return array[index];
};

function recipe_template(recipe){
    
 return `<figure>
            <img src="${recipe.image}" alt="${recipe.name}">
            <figcaption class="content">
                ${tagsTemplate(recipe.tags)}
                <h2>${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p>${recipe.description}</p>
            </figcaption>
        </figure>
        `
};

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html ="";
    for (let i = 0; i < tags.length; i++) {
        html += `<a href="">${tags[i]}</a>
                `;
        
    }
    return html
}
function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            html += `
            <span aria-hidden="true" class="icon-star">⭐</span>`
        }else{
            html += `
            <span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
        
    }
		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star

		// else output an empty star

	// after the loop, add the closing tag to our string
	html += `
    </span>`
	// return the html string
    
	return html
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const main = document.getElementById("main");
	
    // use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    for (let i = 0; i < recipeList.length; i++) {
        const html = recipe_template(recipeList[i])
        main.innerHTML = html;
    };

    // Set the HTML strings as the innerHTML of our output element.
    
}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.

  renderRecipes([recipe]);
}
function matchesSearchTerm(recipe, searchTerm) {
  const term = searchTerm.toLowerCase();

  const inName = recipe.name?.toLowerCase().includes(term);
  const inDescription = recipe.description?.toLowerCase().includes(term);
  const inTags = recipe.tags?.some(tag => tag.toLowerCase().includes(term));
  const inIngredients = recipe.recipeIngredient?.some(ing => ing.toLowerCase().includes(term));
  
  return inName || inDescription || inTags || inIngredients;
}

function fillter(query) {
    const filtered = recipes.filter(matchesSearchTerm(recipes,query))
    console.log(filtered)
	// sort by name
	/*
    const sorted = filtered.sort(sortFunction)
		return sorted
*/
}
function searchHandler(e) {
	e.preventDefault()
	// get the search input
    let value = document.getElementById("searchbox").value;
    // convert the value in the input to lowercase
    value = value.toLowerCase();
    // use the filter function to filter our recipes
    fillter(value)
    // render the filtered list

}
document.addEventListener("DOMContentLoaded",function(){
    const form = document.getElementById("form");
    form.addEventListener("submit",function(event){
        searchHandler(event);
    });
})
init();



