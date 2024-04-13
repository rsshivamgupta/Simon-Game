let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "aqua"];
let started = false;
let level = 0;
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game started 😊😊");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 300);
}

function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `level ${level} 😎`;
  // random button choose
  let ranInx = Math.floor(Math.random() * 4);
  let randColor = btns[ranInx];
  let ranbtn = document.querySelector(`.${randColor}`);

  // console.log(ranInx)
  // console.log(randColor)
  // console.log(ranbtn)

  gameSeq.push(randColor);
  console.log(gameSeq);

  gameFlash(ranbtn);
}

function checkAns(idx) {
  // console.log("current level : ",level)
  // let idx=level-1

  if (gameSeq[idx] === userSeq[idx]) {
    if (gameSeq.length == userSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.innerHTML = `Game Over! Your Score was <b> ${level} </b> <br> Press any Key to start😎😎`;
    document.querySelector("body").style.background="red"
    setTimeout(function(){
     document.querySelector("body").style.background="rosybrown"
    },300)  // 300 mili second 
    
    
    reset();
  }
}

function btnPress() {
  console.log(this); // for the track
  let btn = this; //all btn are using in our indivudual function so it means on this variable appliyng function scope. thats why all this button will not clash with each other for the simplicity i have used this variabe name
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  userSeq = [];
  gameSeq = [];
  level = 0;
  started = false;
}

// if button is in the middle the you don't need to do anything you just have to wait for clicking next button but if button is last value of game sequnce the in that case you can levelUp means by default it can change the level from 1 to 2 to 3 to 4 like this.


// this game will lookinh like a simple game but it is very complex and best to improve memory power