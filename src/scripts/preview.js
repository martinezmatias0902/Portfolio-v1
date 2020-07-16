document.addEventListener("DOMContentLoaded", async() => {

    const logo = document.querySelector("#logo");
    const logoPath = document.querySelector('#logo path');
    const languageButtons = document.querySelector("#language");

    console.log(logoPath.getTotalLength())
    languageButtons.style.display = "none";

    function showLanguageOptions(){
        logo.style.display = "none";
        languageButtons.style.display = "flex";
    }

    setTimeout(showLanguageOptions, 2500);
});