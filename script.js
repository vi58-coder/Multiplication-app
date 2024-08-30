const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`;

const correctAns = num1 * num2;

function updatelocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault(); // Add this to prevent the form from submitting
  const userAns = +inputEl.value;

  if (userAns === correctAns) {
    score++;
  } else {
    score--;
  }

  updatelocalStorage();
  scoreEl.innerText = `score: ${score}`;
});