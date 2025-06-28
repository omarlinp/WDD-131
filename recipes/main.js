import recipes from "./recipes.mjs";

function random (num){
    return Math.floor(Math.random()*num);
     
};
function recipe_list(array){
    const length = array.length;
    const index = random(length);
    return array[index];
};
