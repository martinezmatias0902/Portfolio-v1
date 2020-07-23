document.addEventListener("DOMContentLoaded", async() => {
    const inicio = document.querySelector(".first");
    const sobreMi = document.querySelector(".second");
    const skills = document.querySelector(".third");
    const proyectos = document.querySelector(".fourth");
    const contacto = document.querySelector(".fifth");

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
    
});
