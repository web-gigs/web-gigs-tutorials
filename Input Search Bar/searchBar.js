//costum variables placeholder
let i=0;
const speed=500;
let placeholder="";
const text="Enter URL..."
const Search=document.getElementById("search");
//costum variables for cancel button
let timer;
let timeoutVal=500;
//Custom variables for dragItem Effect
let dragItem=document.querySelector("#item");
let container=document.querySelector(".container");
let active=false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset=0;
let yOffset=0;
//create a placeholder typing animation
function typeWriter(){
    placeholder +=text.charAt(i);
    Search.setAttribute("placeholder", placeholder);
    i++;
    setTimeout(typeWriter,speed);
}
typeWriter();
//Creating a cancel button operation
const button=document.querySelector(".float-btn");
Search.addEventListener("keypress" , handleKeyPress);
Search.addEventListener("keyup" , handleKeyup);
button.addEventListener("click" , clickMe);
//Handle Events on input field
function handleKeyPress(){
    window.clearTimeout(timer);
}
function handleKeyup(){
    //prevent errant multiple timeouts from being generated
    window.clearTimeout(timer);
    timer=window.setTimeout(start,timeoutVal);
    function start(){
        button.style.display="block";
    }
}
function clickMe(){
    Search.value="";
    button.style.display="none";
}
//Creating Events for our drag gesture
container.addEventListener("touchstart",dragStart,false);
container.addEventListener("touchend",dragEnd,false);
container.addEventListener("touchmove",drag,false);
//Creating Events for our mouse gesture
container.addEventListener("mousedown",dragStart,false);
container.addEventListener("mouseup",dragEnd,false);
container.addEventListener("mousemove",drag,false);
//Initializing the drag object
function dragStart(e){
    if(e.type === "touchstart"){
        initialX=e.touches[0].clientX-xOffset;
        initialY=e.touches[0].clienY -yOffset;
    }else{
        initialX=e.clientX - xOffset;
        initialY=e.clientY - yOffset;
    }
    //check if element is draggable
    if(e.target === dragItem){
        active=true;
    }
}
//Ending the drag event of the drag element
function dragEnd(e){
    initialX = currentX;
    initialY = currentY;

    active = false;
}
//called mousemove and touchmove events
function drag(e){
    if(active){
        e.preventDefault();
        if(e.type === "touchmove"){
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        }else{
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }
        xOffset = currentX;
        yOffset = currentY;
        //create a function to initialize translate properties
        setTranslate(currentX, currentY, dragItem);
    }
}
//translate function 
function setTranslate(xPos,yPos,el){
    el.style.transform = "translate3d(" + xPos + "px," + yPos + "px, 0)";
}