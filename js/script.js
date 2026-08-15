// Exibe o botão somente após o início da rolagem
const backToTopButton = document.querySelector(".back-to-top");

function updateBackToTopButton() {
    backToTopButton.classList.toggle("visible", window.scrollY > 300);
}

backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", updateBackToTopButton);
updateBackToTopButton();
