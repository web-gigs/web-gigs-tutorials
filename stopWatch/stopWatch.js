//getting element from the dom tree
const id=(el)=>document.getElementById(el);
const Hour=id("hours");
const Minutes=id("minutes");
const Seconds=id("seconds");
const Milliseconds=id("milliseconds");
//declaring dynamic variables
let interval;
let isRunning;
let [hours,minutes,seconds,milliseconds]=[0,0,0,0];
let Start=document.querySelector('[data-action="start"]');
let Stop=document.querySelector('[data-action="stop"]');
let Reset=document.querySelector('[data-action="reset"]');
//function for start ,stop and reset timer
const  startTimer=()=>{
    if(isRunning) return;
    isRunning=true;
    interval=setInterval(increamentTimer,10);

}
const stopTimer=()=>{
    if(!isRunning) return;
    isRunning=false;
    clearInterval(interval);

}
const resetTimer=()=>{
    stopTimer();
    [hours,minutes,seconds,milliseconds]=[0,0,0,0];
    Hour.innerHTML="00";
    Minutes.innerHTML="00";
    Seconds.innerHTML="00";
    Milliseconds.innerHTML="000";

}
//creating the function to increament timer
function increamentTimer(){
        milliseconds+=10;
        if(milliseconds===1000){
            milliseconds=0;
            seconds++;
            if(seconds===60){
                seconds=0;
                minutes++;
                if(minutes===60){
                    minutes=0;
                    hours++;
                }
            }
        }
        //create presentation for our timer
        let h=(hours<10)?"0"+hours:hours;
        let m=(minutes<10)?"0"+minutes:minutes;
        let s=(seconds<10)?"0"+seconds:seconds;
        let ms=(milliseconds<100)?"0"+ milliseconds:milliseconds;

        //output result on the screen
        Hour.innerHTML=h;
        Minutes.innerHTML=m;
        Seconds.innerHTML=s;
        Milliseconds.innerHTML=ms;
}
//initializing events for start ,stop and reset function button
Start.addEventListener("click",startTimer);
Stop.addEventListener("click",stopTimer);
Reset.addEventListener("click" ,resetTimer);