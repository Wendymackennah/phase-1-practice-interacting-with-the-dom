//getting the elements in html
const counterElm = document.getElementById("counter");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const pauseButton = document.getElementById("pause");
const heartButton = document.getElementById("heart");
const submitButton = document.getElementById("submit");
const likesComments = document.querySelector(".likes");
const inputElm = document.getElementById("comment-input");
const commentsList = document.getElementById("list");

//initializing the counter and pause
let counter = 0;
let isPaused = false;

//updating the counter value
function getCounter() {
  counterElm.textContent = counter;
}
//Event listener for the minus button
minusButton.addEventListener("click", function () {
  if (!isPaused) {
    counter--;
    getCounter();
  }
});
//Event listener for plus button
plusButton.addEventListener("click", function () {
  if (!isPaused) {
    counter++;
    getCounter();
  }
});

//adding event listener for the pause/resume button
pauseButton.addEventListener("click", function () {
  isPaused = !isPaused;
  pauseButton.textContent = isPaused ? "Resume" : "Pause";

  [minusButton, plusButton, heartButton, submitButton].forEach((button) => {
    button.disabled = isPaused;

    button.style.backgroundColor = isPaused ? "#eee" : "";
    button.style.color = isPaused ? "#888" : "";
  });
});

let likesForCurrentSecond = 0;
//adding event listener to the heart button
heartButton.addEventListener("click", function () {
  if (!isPaused) {
    const newLike = document.createElement("li");

    counter++;
    likesForCurrentSecond++;

    newLike.textContent = `${counter} liked ${likesForCurrentSecond} times `;

    getCounter();

    likesComments.appendChild(newLike);
  }
});

//event listener for the comments from the form
submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  let commentsAdd = inputElm.value.trim();

  if (commentsAdd !== "") {
    const newComment = document.createElement("p");
    newComment.textContent = commentsAdd;
    commentsList.appendChild(newComment);

    inputElm.value = "";
  }
});
//increment counter every second
setInterval(() => {
  if (!isPaused) {
    counter++;
    getCounter();
  }
}, 1000);

getCounter();
