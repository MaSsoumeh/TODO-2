"use strict";
let themeIcon = document.getElementById("theme-id");
themeIcon.addEventListener("click", changeTheme);
const inputBox = document.getElementById("input-id");
inputBox.addEventListener("keypress", keyPressCheck);
const divTask = document.getElementById("task-div-id");
let isDark = false;

function createTodo() {
  const myInput = inputBox.value;
  if (myInput === "") {
    inputBox.placeholder = "Please Enter a task to do...";
  } else {
    // Create Elements
    const divElem = document.createElement("div");
    const divEachItem = document.createElement("div");
    const imgCircle = new Image(20, 20);
    imgCircle.src = "./images/circle.svg";
    const imgCross = new Image(20, 20);
    imgCross.src = "./images/cross.svg";
    const spanContent = document.createElement("span");
    const newContent = document.createTextNode(myInput);
    const lineBreak = document.createElement("hr");

    // Call setClass()
    setClass(divElem, divEachItem, imgCircle, imgCross, lineBreak);

    //Call createChild()
    createChild(
      divElem,
      lineBreak,
      divEachItem,
      imgCross,
      imgCircle,
      spanContent,
      newContent
    );

    inputBox.value = "";
    inputBox.placeholder = "Create a new todo";
    let isCompleted = false;
    calcLeftItems();

    //listener on delete-icon
    imgCross.addEventListener("click", deleteTask);

    //listener on circle and Text
    imgCircle.addEventListener("click", completeTask);
    spanContent.addEventListener("click", completeTask);

    //Delete Task
    function deleteTask() {
      divTask.removeChild(divElem);
      divTask.removeChild(lineBreak);
      calcLeftItems();
    }
    //Complete Task
    function completeTask() {
      divElem.classList.toggle("completed");
      lineBreak.classList.toggle("completed");
      isCompleted = !isCompleted;
      imgCircle.src = isCompleted
        ? "./images/check.svg"
        : "./images/circle.svg";
      calcLeftItems();
    }
    //Append Child
    function createChild(
      divElem,
      lineBreak,
      divEachItem,
      imgCross,
      imgCircle,
      spanContent,
      newContent
    ) {
      divTask.appendChild(divElem);
      divTask.appendChild(lineBreak);
      divElem.appendChild(divEachItem);
      divElem.appendChild(imgCross);
      divEachItem.appendChild(imgCircle);
      divEachItem.appendChild(spanContent);
      spanContent.appendChild(newContent);
    }
    //Add class for new elements
    function setClass(divElem, divEachItem, imgCircle, imgCross, lineBreak) {
      divElem.classList.add("elements");
      divElem.classList.add("all");
      divEachItem.classList.add("each-item");
      imgCircle.classList.add("circle");
      imgCross.classList.add("cross");
      lineBreak.classList.add("horizontalLine");
      lineBreak.classList.add("all");
    }

    // Left Items
    function calcLeftItems() {
      const leftItems =
        document.getElementsByClassName("elements").length -
        document.getElementsByClassName("completed").length / 2;
      document.getElementById("left").innerHTML =
        leftItems <= 1 ? leftItems + " item left" : leftItems + " items left";
    }
  }
} //End of createTodo()

//Enter-key Checker
function keyPressCheck(event) {
  if (event.which === 13) {
    createTodo();
  }
}
//Change theme
function changeTheme() {
  isDark = !isDark;
  themeIcon.src = isDark ? "./images/sun.svg" : "./images/moon.svg";
}
// Show Completed
function showCompleted() {
  const allObjects = document.getElementsByClassName("all");
  for (let items of Object.keys(allObjects)) {
    allObjects[items].classList.add("invisible");
  }
  const completedList = document.getElementsByClassName("completed");
  for (let items of Object.keys(completedList)) {
    completedList[items].classList.remove("invisible");
  }
}
// Show All
function showAll() {
  const invisibleElements = document.getElementsByClassName("all");
  for (let items of Object.keys(invisibleElements)) {
    invisibleElements[items].classList.remove("invisible");
  }
}
// Show Active Tasks
function showActive() {
  const allObjects = document.getElementsByClassName("all");
  for (let items of Object.keys(allObjects)) {
    allObjects[items].classList.remove("invisible");
  }
  const completedList = document.getElementsByClassName("completed");
  for (let items of Object.keys(completedList)) {
    completedList[items].classList.add("invisible");
  }
}

//clear completed
function clearCompleted() {
  const completedObjects = document.getElementsByClassName("completed");
  Object.keys(completedObjects).forEach((key) => completedObjects[0].remove());
}
