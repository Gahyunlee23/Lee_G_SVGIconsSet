(() => {
    //stub
    console.log('fired!');

    let mainLine = document.querySelector(".main-title")
        convertButton = document.querySelector(".magic Button")
        loadButton = document.querySelector(".image-container Button")


    function changeText() {
        mainLine.textContent = "Fruit icons for SVG Assignment!!";
        mainLine.classList.toggle("selected");
    }

    
    function loadTheSVG () {
        console.log(this.previousElementSibling.id);
    }


    convertButton.addEventListener("click", changeText);
   
    loadButton.addEventListener("click", loadTheSVG);

})();