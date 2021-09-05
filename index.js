var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomdiceImage = "dice" + randomNumber1 + ".png"//dice 1 .png - dice6.png
var randomImageSource = "images/" + randomdiceImage; //dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0]; image1.setAttribute("src", randomImageSource);

// image 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// if player 1 wins
if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = " Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Play 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}

// document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + Math.floor(Math.random() * 6) + 1) ++ ".png";