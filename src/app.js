/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//constants: cardNumbers, cardSymbol and cardColors.
const cardNumber = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "K",
  "Q",
  "J"
];
const cardSymbol = ["♦", "♥", "♠", "♣"];
const cardColors = ["red", "black"];

window.onload = function() {
  //write your code here
  //Creating card
  let card = document.querySelector("div");
  card.classList.add("card");
  // Selecting Card Number
  let indexCardNumber = Math.floor(Math.random() * 12);
  let hOne = document.createElement("h1");
  hOne.style = "font-size:200px;";
  hOne.innerHTML = cardNumber[indexCardNumber];
  card.appendChild(hOne);
  //Selecting color
  let indexCardColor = Math.floor(Math.random() * 2);
  let color = cardColors[indexCardColor];
  //Selecting Symbol
  let indexCardSymbol = Math.floor(Math.random() * 3);
  let symbol = cardSymbol[indexCardSymbol];
  let upperSymbol = document.createElement("h1");
  let lowerSymbol = document.createElement("h1");
  upperSymbol.innerHTML = symbol;
  lowerSymbol.innerHTML = symbol;
  upperSymbol.classList.add("top-symbol");
  lowerSymbol.classList.add("bottom-symbol");
  upperSymbol.style = "color:" + color;
  lowerSymbol.style = "color:" + color;
  card.appendChild(lowerSymbol);
  card.appendChild(upperSymbol);
};
