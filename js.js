// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
    const darkModeBtn = document.createElement("button");
    darkModeBtn.innerText = "Toggle Dark Mode";
    darkModeBtn.id = "darkModeBtn";
    document.body.prepend(darkModeBtn);

    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});