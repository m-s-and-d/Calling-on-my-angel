const button = document.getElementById("enterButton");

const firstScreen = document.querySelector(".project-screen");

const angelScreen = document.querySelector(".angel-screen");


button.addEventListener("click", () => {

    firstScreen.style.transition = "2s";
    firstScreen.style.opacity = "0";


    setTimeout(() => {

        firstScreen.style.display = "none";

        angelScreen.style.opacity = "1";
        angelScreen.style.pointerEvents = "auto";


        const angelContent = document.querySelector(".angel-content");

        angelContent.style.opacity = "1";
        angelContent.style.transform = "translateY(0)";


    }, 2000);

});
