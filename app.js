const colors = [
  "green",
  "brown",
  "gold",
  "pink",
  "white",
  "red",
  "yellow",
  "blue",
  "purple",
  "black",
  "grey",
  "turquoise",
  "orange",
  "violet",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number between 0 - 13
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
