(() => {
    //stub
    console.log('fired!');

    //select elements with JavaScript
    // setting up a variable using the let keyboard,
    //and using a CSS Selector to find the elenent we want to use.

    //let stores the reference to element as a variable (in memory)
    let mainHeadline = document.querySelector(".main-headline"),
        subHeadline = document.querySelector(".sub-headline"),
        swapTextBotton = document.querySelector(".switch-type"),
        allImages = document.querySelectorAll("#image-container img"),
        objectBotton = document.querySelector(".container button");


    //functions are reuseable piece of code
    //that ypu can run any time
    function logMyId() {
      console.log(this.id);
      //toggle a class here with classList
    }

    function swapText() {
        mainHeadline.textContent = "Now You're something else!";
        mainHeadline.classList.toggle("selected");

        subHeadline.textContent = "Magic! Change!";
        subHeadline.classList.toggle("selected");
    }

    function logTheSVG() {
      console.log(this.previousElementSibling.id);
    }

    //events always go down here
    swapTextBotton.addEventListener("click",swapText);

    // select and loop through a bunch of otems ay once --> one to many relationship
    allImages.forEach(item => {
      item.addEventListener("click", logMyId);
    });

    objectBotton.addEventListener("click", logTheSVG);
    })();
