(() => {
    //stub
    console.log('fired!');

    let mainLine = document.querySelector(".main-title")
        convertButton = document.querySelector(".magic Button")

        


    function changeText() {
        mainLine.textContent = "Fruit icons for SVG Assignment!!";
        mainLine.classList.toggle("selected");
    }

    convertButton.addEventListener("click", changeText);


})();