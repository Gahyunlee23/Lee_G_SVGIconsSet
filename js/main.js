(() => {
    //stub
    console.log('fired!');

    //select elements with JavaScript
    // setting up a variable using the let keyboard,
    //and using a CSS Selector to find the elenent we want to use.

    //let stores the reference to element as a variable (in memory)
    let svgGraphic = document.querySelector('#badgeSVG');
    //functions are reuseable piece of code
    //that ypu can run ant time
    function logMyId() {
      console.log(this.id);

      this.style.opacity = 0.5;
    }

    svgGraphic.addEventListener("click", logMyId)


})();
