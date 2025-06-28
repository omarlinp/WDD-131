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
                ${tagsTemplate(recipe.tags)}
                <h2>${recipe.name}</h2>
                <span
	                    id="rating"
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
function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html ="";
    for (let i = 0; i < tags.length; i++) {
        html += `<a href="">${tags[i]}</a>`;
        
    }
    console.log(html);
    return html
}
console.log(recipe_template(recipe_list(recipes)))

