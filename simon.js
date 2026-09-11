let level=0;
let gameSeq=[];
let userSeq=[];
let started=false;
let flash=["red","blue","yellow","orange"];
let h2=document.querySelector('h2');
let start=document.querySelector('#stbtn')
start.addEventListener('click',function(){
    console.log('key pressed');
    if(started==false){
        started=true;
        levelUp();
    }
});
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randc=randomColor();
    gameFlash(randc);
};
function randomColor(){
    let index=Math.floor(Math.random()*flash.length);
    let randc=flash[index];
    gameSeq.push(randc);
    console.log(gameSeq);
    return randc;
};
function gameFlash(randc){
    let btn=document.querySelector(`#${randc}`);
    btn.classList.add('flash');
    setTimeout(function(){ //iske baad class remove ho jayegi 250 ms ke baad
        btn.classList.remove('flash');
    },250);
};
function btnPress(){
    console.log(this);//"this" here,tells which element has triggered the event
    let btn=this;
    userFlash(btn);
    user = this.id;
    userSeq.push(user);
    console.log(userSeq);
    checkSeq();
}
let allBtns=document.querySelectorAll('.btn');
for(btn of allBtns){ //to access all buttons
    btn.addEventListener('click',btnPress);
};
function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(function(){
        btn.classList.remove('userFlash');
    },250);
};
function checkSeq(){
    let idx=userSeq.length-1;
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,250);
        }
    }
    else{
        h2.innerHTML=`Game over,Your score is <b>${level*10}<b><br>Click the Start button to start the game again!<br>`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='lightgreen';
        },250);
        reset();
    }
};
function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
};
