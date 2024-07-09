/*
// DOM の操作ってそんなにするんかな～
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// 無名関数
document.querySelector("html").addEventListener("click", function() {
  alert("痛っ！つつかないで！");
});

// アロー関数
document.querySelector("html").addEventListener("click", () => {
  alert("痛っ！つつかないで！");
});
*/

// Image switcher code

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

// Personalized welcome message code

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};