let boxes = document.querySelectorAll(".box");
let resetBTN = document.querySelector("#Res");
let turnO = true;
let msgContainer = document.querySelector(".msgcont");
let msg = document.querySelector(".msg");

const winpattern = [
  [0, 1, 2], 
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const rstgame = () => {
  turnO = true;
  msgContainer.classList.add("hide");
  enableBoxes();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("button was clicked");
    if (turnO) {
      box.innerText = "X";
      turnO = false;
    } else {
      box.innerText = "O";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

const showWinner = (winner) => {
  msg.innerText = `Winner: ${winner}`;
  msgContainer.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winpattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner");
        showWinner(pos1);
        disableBoxes();
      }
    }
  }
};
resetBTN.addEventListener("click", rstgame);

