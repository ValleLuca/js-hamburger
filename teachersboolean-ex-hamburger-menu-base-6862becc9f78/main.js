const element = document.querySelector(".fa-bars");

element.addEventListener("click", function() {
    document.querySelector(".hamburger-menu").style.display = "block";
});

const element = document.querySelector(".fa-times");

element.addEventListener("click", function() {
    document.querySelector(".hamburger-menu").style.display = "none";
});

