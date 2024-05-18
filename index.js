let randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);
let image1 = "images/dice" + randomNumber1 + ".png";
let image2 = "images/dice" + randomNumber2 + ".png";
console.log(image1);
console.log(image2);

document.querySelector("img.dice-left").setAttribute("src", image1);
document.querySelector("img.dice-right").setAttribute("src", image2);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
