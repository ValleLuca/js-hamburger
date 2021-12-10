const opernMenu = document.querySelector(".fa-bars"); //aggiunta variabile "openMenu"
const closeMenu = document.querySelector(".fa-times");//aggiunta variabile "closeMenu"

opernMenu.addEventListener("click", function() {
    document.querySelector(".hamburger-menu").style.display = "block"; //aggiunta query che fa aprire il menù ad hamburgher
});

closeMenu.addEventListener("click", function() {
    document.querySelector(".hamburger-menu").style.display = "none"; //aggiunta query che fa chiudere il menù ad hamburgher
});

