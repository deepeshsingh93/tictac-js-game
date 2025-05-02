let boxes = document.querySelectorAll(".btn");

let resetbtn = document.querySelector("#reset-btn");
let turnO = true; //player x, or player o

let winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText == "") {
      box.innerText = turnO ? "O" : "X";
      turnO = turnO ? false : true;
    }
  });
});

resetbtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
  });
  turnO = true;
});
