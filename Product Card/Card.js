
//functions and Events
document.addEventListener("DOMContentLoaded",function(event){
    //get Element from the dom tree
let turnBack=document.getElementById("turn-to-back");
let turnFront=document.getElementById("turn-to-front");
let flipCard=document.getElementById("flip-card");
//Event Listener on Event Object
turnBack.addEventListener("click" , onflipBack);
turnFront.addEventListener("click", onflipFront)
    turnBack.style.visibility="visible";
    //function for onflipBack
    function onflipBack(){
        turnFront.style.visibility="visible";
        flipCard.classList.toggle("do-flip");
    }
    //function for onflipFront
    function onflipFront(){
        flipCard.classList.toggle("do-flip");
    }
});