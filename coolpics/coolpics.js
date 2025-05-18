const menubutton = document.querySelector("#button");
function toggleMenu(){
    const menu = document.querySelector(".menuList");
    menu.classList.toggle("show");
}

menubutton.addEventListener("click", toggleMenu);