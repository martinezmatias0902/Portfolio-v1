document.addEventListener("DOMContentLoaded", async() => {
    const inicio = document.querySelector(".first");
    const sobreMi = document.querySelector(".second");
    const skills = document.querySelector(".third");
    const proyectos = document.querySelector(".fourth");
    const contacto = document.querySelector(".fifth");
    const goUp = document.querySelector(".goUp")

    const check = document.querySelector("#check")

    sobreMi.addEventListener('click', () => {
        check.click();
    })
    inicio.addEventListener('click', () => {
        check.click();
    })
    skills.addEventListener('click', () => {
        check.click();
    })
    proyectos.addEventListener('click', () => {
        check.click();
    })
    contacto.addEventListener('click', () => {
        check.click();
    })



    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goUp.style.display = "block";
        } else {
            goUp.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document

    goUp.addEventListener('click', () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    })

    
});
