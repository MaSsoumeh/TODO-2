"use strict";
let themeIcon = document.getElementById("theme-id");
themeIcon.addEventListener("click", changeTheme);
const inputBox = document.getElementById("input-id");
inputBox.addEventListener("keypress", keyPressCheck);
const divTask = document.getElementById("task-div-id");
let isDark = false;

function createElement() {
  const myInput = inputBox.value;
  if (myInput === "") {
    inputBox.placeholder = "Please Enter a task to do...";
  } else {
    // Create New Elements
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
    divElem.classList.add("all");
    divEachItem.classList.add("each-item");
    imgCircle.classList.add("circle");
    imgCross.classList.add("cross");
    lineBreak.classList.add("horizontalLine");
    lineBreak.classList.add("all");

    //Append Child
    divTask.appendChild(divElem);
    divTask.appendChild(lineBreak);
    divElem.appendChild(divEachItem);
    divElem.appendChild(imgCross);
    divEachItem.appendChild(imgCircle);
    divEachItem.appendChild(spanContent);
    spanContent.appendChild(newContent);
    inputBox.value = "";
    inputBox.placeholder = "Create a new todo";
    let isCompleted = false;
    activeLen();
    //Delete Task Function
    imgCross.addEventListener("click", deleteTask);
    function deleteTask() {
      divTask.removeChild(divElem);
      divTask.removeChild(lineBreak);
      activeLen();
    }
    //Completed Task Function
    imgCircle.addEventListener("click", completeTask);
    spanContent.addEventListener("click", completeTask);
    function completeTask() {
      divElem.classList.toggle("completed");
      lineBreak.classList.toggle("completed");
      isCompleted = !isCompleted;
      imgCircle.src = isCompleted
        ? "./images/check.svg"
        : "./images/circle.svg";
      activeLen();
    }
  }
  // Left Items Function
  function activeLen() {
    const activeLen =
      document.getElementsByClassName("elements").length -
      document.getElementsByClassName("completed").length / 2;
    if (activeLen <= 1) {
      document.getElementById("left").innerHTML = activeLen + " item left";
    } else {
      document.getElementById("left").innerHTML = activeLen + " items left";
    }
  }
}
//Enter-key Checker Function
function keyPressCheck(event) {
  if (event.which === 13) {
    createElement();
  }
}
//Change theme Function
function changeTheme() {
  debugger;
  isDark = !isDark;
  themeIcon.src = isDark ? "./images/sun.svg" : "./images/moon.svg";
}
// Show Completed Function
function showCompleted() {
  const allObjects = document.getElementsByClassName("all");
  for (let elems of Object.keys(allObjects)) {
    allObjects[elems].classList.add("invisible");
  }
  const completedList = document.getElementsByClassName("completed");
  for (let elems of Object.keys(completedList)) {
    completedList[elems].classList.remove("invisible");
  }
}
// Show All Function
function showAll() {
  const invisibleElems = document.getElementsByClassName("all");
  for (let elems of Object.keys(invisibleElems)) {
    invisibleElems[elems].classList.remove("invisible");
  }
}
// Show Active Tasks Function
function showActive() {
  const allObjects = document.getElementsByClassName("all");
  for (let elems of Object.keys(allObjects)) {
    allObjects[elems].classList.remove("invisible");
  }
  const completedList = document.getElementsByClassName("completed");
  for (let elems of Object.keys(completedList)) {
    completedList[elems].classList.add("invisible");
  }
}

//clear completed Function
function clearCompleted() {
  const completedObject = document.getElementsByClassName("completed");
  while (completedObject.length > 0) {
    completedObject[0].remove();
  }
}
