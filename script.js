let boxes = document.querySelectorAll(".btn");

let resetbtn = document.querySelector("#reset-btn");
let turnO = true; //player x, or player o
let pattern_o = [];
let pattern_x = [];

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

function isSubset(parentArr, childArr) {
  return childArr.every((element) => parentArr.includes(element));
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText == "") {
      box.innerText = turnO ? "O" : "X";
      if (turnO) {
        pattern_o.push(
          parseInt(document.querySelector(`#${box.id}`).attributes.tag.value)
        );
        checkWin(pattern_o);
      } else {
        pattern_x.push(
          parseInt(document.querySelector(`#${box.id}`).attributes.tag.value)
        );
        checkWin(pattern_x);
      }
      turnO = turnO ? false : true;
    }
  });
});

function checkWin(checkPattern) {
  if (checkPattern.length >= 3) {
    winningPatterns.forEach((pattern) => {
      if (isSubset(checkPattern, pattern)) {
        alert(turnO ? "O wins" : "X wins");
        boxes.forEach((box) => {
          box.innerText = "";
        });
        turnO = true;
        pattern_o = [];
        pattern_x = [];
      }
    });
  }
}

resetbtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
  });
  turnO = true;
  pattern_o = [];
  pattern_x = [];
});
