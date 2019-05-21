(() => {
    //stub
    console.log('fired!');

    //select elements with JavaScript
    // setting up a variable using the let keyboard,
    //and using a CSS Selector to find the elenent we want to use.

    //let stores the reference to element as a variable (in memory)
    let svgGraphic = document.querySelector('#badgeSVG'),
        mainHeadline = document.querySelector('.main-headline'),
        subHeadline = document.querySelector('.sub-headline'),
        swapTextBotton = document.querySelector('.switch-type');

    //functions are reuseable piece of code
    //that ypu can run any time
    function logMyId() {
      console.log(this.id);

      this.style.opacity = 0.5;
    }

    function swapText() {
        mainHeadline.textContent = "Now You're something else!";
        mainHeadline.classList.toggle("selected");

        subHeadline.textContent = "Magic! Change!";
        subHeadline.classList.toggle("selected");
    }

    //events always go down here
    svgGraphic.addEventListener("click", logMyId);
    swapTextBotton.addEventListener("click",swapText);


})();
