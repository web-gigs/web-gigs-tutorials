//constum variables
let i=0;
const speed=120;
let placeholder="";
const txt="Enter a valid hex color value";
//getElement from the dom tree
const colorBoard=document.querySelector(".color");
const button=document.querySelector(".color-button");
const input=document.querySelector(".color-input");
const rgbColors=document.querySelectorAll(".color-rgb-code");
//Events and objects
button.addEventListener("click",visualize);
input.addEventListener("input",clear);
//function to splite hex color value into rgb values
function convertHex(hex){
    hex=hex.replace("#","");
    //Adjust color length to six digits
    if(hex.length === 3) hex +=hex;
    //Divide this color code into three secments
    const r=parseInt(hex.substring(0,2),16);
    const g=parseInt(hex.substring(2,4),16);
    const b=parseInt(hex.substring(4,6),16);
    //return each segment of the hex code
    return r>=0 && g>=0 && b>=0 ? {r,g,b}:false;
}
//Apply rgb values to background color
function applyRGB(el,color,type){
    if(type === "r") el.style.backgroundColor=`rgb(${color},0,0)`;
    if(type === "g") el.style.backgroundColor=`rgb(0, ${color},0)`;
    if(type === "b") el.style.backgroundColor=`rgb(0,0, ${color})`;
}
//function to init visialization
function visualize(){
    const hexCode=input.value;
    const color=convertHex(hexCode);
    //Initialize is active class
    colorBoard.classList.add("is-active");
    //Get R,G,B from the dom tree 
    rgbColors.forEach((segment)=>{
        const {id} = segment;
        //Initialize Apply RGB colors
        applyRGB(segment,color[id],id)
    });
}
//function to clear input value
function clear(){
    if(input.value.length===0){
        //if input value is empty remove is-active class
        colorBoard.classList.remove("is-active");
    }
}
//create a placeholder typing animation
function typeWriter(){
    placeholder +=txt.charAt(i);
    input.setAttribute("placeholder", placeholder);
    i++;
    setTimeout(typeWriter,speed);
}
typeWriter();