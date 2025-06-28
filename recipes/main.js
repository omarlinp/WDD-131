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
                ${ratingTemplate(recipe.rating)}
                <p>${recipe.description}</p>
            </figcaption>
        </figure>`
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
console.log(recipe_template(recipe_list(recipes)))

