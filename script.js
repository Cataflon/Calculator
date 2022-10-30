const listButtons = document.querySelectorAll(".btn");
const rezult = document.querySelector(".display-rezult");
const elem = document.querySelector(".resultA");
const rezultFin = document.querySelector(".rezult-value");
const DarkTheme = document.querySelector(".dark");
const LightTheme = document.querySelector(".light");
const container = document.querySelector(".container");
const bgrBtn = document.querySelector(".taste");
const egal = document.querySelector(".egal");
let gate = false;

LightTheme.addEventListener("click", () => {
  container.style.backgroundColor = "#ffffff";
  DarkTheme.style.backgroundColor = "#f0e4e4";
  LightTheme.style.backgroundColor = "#f0e4e4";
  for (var i = 0; i < listButtons.length; i++) {
    listButtons[i].style.background = "#f8f6f6";
  }
  elem.style.backgroundColor = "#f0e4e4";
  bgrBtn.style.backgroundColor = "#f0e4e4";
  rezult.style.color = "black";
  rezultFin.style.color = "black";
  for (var i = 0; i < listButtons.length; i++) {
    listButtons[i].style.color = "black";
  }
  DarkTheme.style.color = "black";
  LightTheme.style.color = "black";
  egal.style.color = "black";
  elem.style.color = "black";
});

DarkTheme.addEventListener("click", () => {
  container.style.backgroundColor = "#22252d";
  DarkTheme.style.backgroundColor = "#262932";
  LightTheme.style.backgroundColor = "#262932";
  for (var i = 0; i < listButtons.length; i++) {
    listButtons[i].style.background = "#262932";
  }
  elem.style.backgroundColor = "#262932";
  bgrBtn.style.backgroundColor = "#2a2d37";
  rezult.style.color = "white";
  rezultFin.style.color = "white";
  for (var i = 0; i < listButtons.length; i++) {
    listButtons[i].style.color = "white";
  }
  DarkTheme.style.color = "white";
  LightTheme.style.color = "white";
  egal.style.color = "white";
  elem.style.color = "white";
});

listButtons.forEach((element) => {
  element.addEventListener("click", () => {
    if (
      (element.innerHTML === "/" ||
        element.innerHTML === "*" ||
        element.innerHTML === "+" ||
        element.innerHTML === "-") &&
      !gate
    ) {
      gate = true;
      if (rezult.innerHTML.length > 0) {
        rezult.innerHTML += element.innerHTML;
      }
    }
    if (
      element.innerHTML !== "/" &&
      element.innerHTML !== "*" &&
      element.innerHTML !== "+" &&
      element.innerHTML !== "-"
    ) {
      gate = false;
      rezult.innerHTML += element.innerHTML;
    }

    if (element.innerHTML === "C") {
      rezult.innerHTML = "";
      rezultFin.innerHTML = "";
    }
  });
});
elem.addEventListener("click", () => {
  if (
    rezult.innerHTML[rezult.innerHTML.length - 1] === "/" ||
    rezult.innerHTML[rezult.innerHTML.length - 1] === "*" ||
    rezult.innerHTML[rezult.innerHTML.length - 1] === "-" ||
    rezult.innerHTML[rezult.innerHTML.length - 1] === "+" ||
    rezult.innerHTML[rezult.innerHTML.length - 1] === "."
  ) {
    let array = rezult.innerHTML.split("");
    array.pop();
    rezult.innerHTML = array.join("");
    rezultFin.innerHTML = eval(rezult.innerHTML);
  } else {
    rezultFin.innerHTML = eval(rezult.innerHTML);
  }
});
