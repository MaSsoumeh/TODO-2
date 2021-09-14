"use strict";
let themeIcon = document.getElementById("theme-id");
themeIcon.addEventListener("click", changeTheme);
const inputBox = document.getElementById("input-id");
inputBox.addEventListener("keypress", keyPressCheck);
const divTask = document.getElementById("task-div-id");
let isDark = false;
function createElement() {
  // Create New Elements
  const myInput = inputBox.value;
  const divElem = document.createElement("div");
  const divEachItem = document.createElement("div");
  const imgCircle = new Image(20, 20);
  imgCircle.src = "./images/circle.svg";
  const imgCross = new Image(20, 20);
  imgCross.src = "./images/cross.svg";
  const spanContent = document.createElement("span");
  const newContent = document.createTextNode(myInput);
  const lineBreak = document.createElement("hr");
  // Set class
  divElem.classList.add("elements");
  divEachItem.classList.add("each-item");
  imgCircle.classList.add("circle");
  imgCross.classList.add("cross");

  //Append Child
  divTask.appendChild(divElem);
  divTask.appendChild(lineBreak);
  divElem.appendChild(divEachItem);
  divElem.appendChild(imgCross);
  divEachItem.appendChild(imgCircle);
  divEachItem.appendChild(spanContent);
  spanContent.appendChild(newContent);
  let isCompleted = false;
  //delete item
  imgCross.addEventListener("click", deleteTask);
  function deleteTask() {
    divTask.removeChild(divElem);
    divTask.removeChild(lineBreak);
  }

  //Completed item
  imgCircle.addEventListener("click", completeTask);
  spanContent.addEventListener("click", completeTask);
  function completeTask() {
    spanContent.classList.toggle("completed");
    isCompleted = !isCompleted;
    imgCircle.src = isCompleted ? "./images/check.svg" : "./images/circle.svg";
  }
}

//Enter key Checker
function keyPressCheck(event) {
  if (event.which === 13) {
    createElement();
  }
}
//Change theme
function changeTheme() {
  debugger;
  isDark = !isDark;
  themeIcon.src = isDark ? "./images/sun.svg" : "./images/moon.svg";
}
