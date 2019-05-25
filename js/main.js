(() => {
    //stub
    console.log('working!');
    
    //Bring(let) Section
    let mainLine = document.querySelector(".main-title")
        convertButton = document.querySelector(".magic Button")
        loadButton = document.querySelector(".image-container Button")

    // Function
    function changeText() {
        mainLine.textContent = "Fruit icons for SVG Assignment!!";
        mainLine.classList.toggle("selected");
    }

    
    function loadTheSVG () {
        console.log(this.previousElementSibling.id);
    }

    //Event Section
    convertButton.addEventListener("click", changeText);
   
    loadButton.addEventListener("click", loadTheSVG);

})();