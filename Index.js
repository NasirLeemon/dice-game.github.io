 var randomNumber1 = Math.floor(Math.random() * 6)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png";
var diceImageSource = "images/" + randomDiceImage;

var imageOne = document.querySelectorAll("img")[0];
imageOne.setAttribute("src",diceImageSource);



var randomNumber2 = Math.floor(Math.random() * 6)+1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var diceImageSource2 = "images/" + randomDiceImage2;

var imageTwo = document.querySelectorAll("img")[1];
imageTwo.setAttribute("src",diceImageSource2);


if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerText = "Player 1 Wins!";
}
else if
  (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerText = "Player 2 Wins!";
  }

  else {
    document.querySelector("h1").innerText = "Draw!";
  }
