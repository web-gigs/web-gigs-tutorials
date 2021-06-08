//Global variables
let currentOption=0;
//Get Element from the dom tree
let wrapper=document.querySelector(".food");
let menuElement=document.getElementById("menu");
let currentFood=document.getElementById("food");
const button=document.getElementById("next-option");
const fixWidth=document.getElementById("width-fix");
const optionElement=document.getElementById("current-option");
//Array of food option and array of option options
const options=["burger","cake","cream","sandwitch"];
const food=["img/burger.png","img/cake.png","img/cream.png","img/sandwitch.png"];
//Create a fix width for food option
options.forEach(e=>{
    //create new span element
    let el=document.createElement("span");
    //attach each food element to the span element
    el.innerText=e;
    fixWidth.appendChild(el);
});
//set initial food option
optionElement.innerText=options[currentOption];
//set preview next Option
button.onclick=function(){
   //initialize current option stepper
   currentOption=currentOption<options.length-1?currentOption + 1:0;
   //output current food for our food menu
   currentFood.setAttribute("src",food[currentOption]);
   //Initialize animation using classList for food menu
   menuElement.classList.add("anim");
   wrapper.classList.add("anim");
   //End animation for our food menu
   setTimeout(()=>{
       //ouput food menu current option
       optionElement.innerText=options[currentOption];
       //toggle class for food menu off
       menuElement.classList.remove("anim");
       wrapper.classList.remove("anim");
   },650);
}
