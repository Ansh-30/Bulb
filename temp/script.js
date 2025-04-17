let modeBtn = document.querySelector(".mode");
let body= document.querySelector("body");
let curMd= "light";

modeBtn.addEventListener("click",()=>{
    if (curMd==="light"){
    curMd="dark";
    body.classList.add("dark");
    body.classList.remove("light");
    }else{
        curMd="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(curMd)

})