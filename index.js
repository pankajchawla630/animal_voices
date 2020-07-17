
var len=7;
for (var i = 0; i < len; i++) {
    document.querySelectorAll(".animal")[i].addEventListener("click", function() {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {
    case "w":
      var dog = new Audio("sounds/dog.mp3");
      dog.play();
      break;

    case "a":
      var elephant = new Audio("sounds/elephant.mp3");
      elephant.play();
      break;

    case "s":
      var lion = new Audio('sounds/lion.mp3');
      lion.play();
      break;

    case "d":
      var monkey = new Audio('sounds/monkey.mp3');
      monkey.play();
      break;

    case "j":
      var snake = new Audio('sounds/snake.mp3');
      snake.play();
      break;

    case "k":
      var squirrel = new Audio('sounds/squirrel.mp3');
      squirrel.play();
      break;

    case "l":
      var wolf = new Audio('sounds/wolf.mp3');
      wolf.play();
      break;

    default: console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
