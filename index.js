// create a variable container that contains the Array of class Drum.
var numberOfButtons = document.querySelectorAll(".drum").length;

// create a Loop for the EventListener. can be made as an while loop aswell.
for (var i = 0; i < numberOfButtons; i++) {

// Selects all .drum Classes and ads an eventlistener when clicked then executes a function.
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    // new variable container that contains the innner HTML output of the queryselector for above.
    // .drum will output some letters and these are the captures in the variable buttonInnerHTML.
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

  });
}

document.addEventListener("keypress", function(event){
  makeSound(event.key);
})

function makeSound(key){

  switch (key) {

    // practicaly when the letter w is pressed then:
    case "w":
      // the variable that contains the sound should play.
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      // when done playing it sould stop and leav the function.
      break;

    case "a":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default: console.log(innerHTML);

  }
}
