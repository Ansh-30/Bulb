let boxes= document.querySelectorAll(".box");
let rstBTN= document.querySelector("#rst");
let turnO= false;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [1,4,7],
    [6,4,2],
    [6,7,8],
    [2,5,8]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked");
    if(turnO){
        box.innerText="X";
        turnO=false;
    }
    else{
        box.innerText="O";
        turnO=true;
    }
    checkwinner();
    })
});
2