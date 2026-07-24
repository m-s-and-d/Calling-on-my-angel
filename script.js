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
        
        document.body.style.overflowY = "auto";

        const angelContent = document.querySelector(".angel-content");

        angelContent.style.opacity = "1";
        angelContent.style.transform = "translateY(0)";


    }, 2000);

});
const panels = document.querySelectorAll(".panel p");


const observer = new IntersectionObserver((entries) => {


    entries.forEach(entry => {


        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }


    });


}, {

    threshold: 0.5

});


panels.forEach(panel => {

    observer.observe(panel);

});
