const OpernMenu = document.querySelector(".fa-bars");

OpernMenu.addEventListener("click", function() {
    document.querySelector(".hamburger-menu").style.display = "block";
});

const CloseMenu = document.querySelector(".fa-times");

CloseMenu.addEventListener("click", function() {
    document.querySelector(".hamburger-menu").style.display = "none";
});

