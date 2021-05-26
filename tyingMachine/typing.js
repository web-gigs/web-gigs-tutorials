//function for generating speed value on speed board
const setupValue=function(){
    //the radius is half the num-wrapper width and height
    let radius=150;
    // get the num-wrapper for speed values
    let main=document.querySelector(".num-wrapper");
    //create a height of position for speed values
    let mainHeight=parseInt(window.getComputedStyle(main).height.slice(0,-2));
    //create an angle that defines the position for each speed value that will be placed on the speed board
    let theta = [0, (2 * (Math.PI / 15)), (4 * (Math.PI / 15)), (2 * (Math.PI / 5)), (8 * (Math.PI / 15)), (2 * (Math.PI / 3)), (4 * (Math.PI / 5)), (14 * (Math.PI / 15)), (16 * (Math.PI / 15))];
    let circleArray = [];
    //Note theta value is given base on th number of speed value which is nine
    //generate speed values
    let num=[10,20,30,40,50,60,70,80,90];
    //loop over each speed value and assign it to circle class
    for(let i=0; i<9;i++){
        let circle=document.createElement("div");
        circle.className="circle number" + i;
        //push each speed value to the circleArray
        circleArray.push(circle);
        //create position values of each speed value with x and y axis
        circleArray[i].posx=Math.round(radius * (Math.cos(theta[i]))) + "px";
        circleArray[i].posy=Math.round(radius * (Math.sin(theta[i]))) + "px";
        //output speed value on the HTML document object
        circleArray[i].innerHTML=num[i];
        circleArray[i].style.position="absolute";
        //Apply position values for each speed value with the x and y axis
        circleArray[i].style.top=((mainHeight/2) - parseInt(circleArray[i].posy.slice(0, -2))) + "px";
        circleArray[i].style.left=((mainHeight/2) - parseInt(circleArray[i].posx.slice(0, -2))) + "px";
        //append all speed value elements to their parent div
        main.appendChild(circleArray[i]);
    }
}
setupValue();
//typing machine configuration
let typingMachine=function(){
    //create initial word string length
    let oldStrLen=0,
        //An Array to keep track of each character per second
        charsEachSec=[];
    //get typing speed 
    const getWPM=function(){
        //get dom element for typing speed
        const arrow=document.getElementsByClassName("arrow")[0];
        let typingUnit=document.getElementById("unit");
        strLen=document.getElementsByTagName("textarea")[0].value.length;
        //initial word typed per minute
        let wpm=0;
        //unless field is cleared ,get WPM based on average characters typed
        if(strLen > 0){
            //charsDurSec is the length of each word typed
            let charsDurSec=strLen - oldStrLen,
                charSum=0,
                wordLen=5,
                maxWords=60;
            //store each word dot length in an array
            charsEachSec.push(charsDurSec);
            //use last n words for average
            if(charsEachSec.length>maxWords){
                charsEachSec.shift();
            }
            for(let i in charsEachSec){
                //charSum is the total sum of words typed
                charSum +=charsEachSec[i];
            }
            //calculate typing speed
            let avgChars=charSum / charsEachSec.length,
                //Wps is overall typing speed
                wps=avgChars / wordLen,
                //wpmCalc is current typing speed
                wpmCalc=Math.round(wps * 60),
                //maximum typing speed allowed
                hardLimit=999;
            //render calculated  typing speed
            if(wpmCalc > 0 && wpmCalc <= hardLimit){
                wpm=wpmCalc;
            //render maximum typing speed
            }else if(wpmCalc > hardLimit){
                wpm=hardLimit;
            }
            //empty word dot length stored in array of words
        }else{
            charsEachSec = [];
        }
        //make old string length equal to newest one before calculating wpm again
        oldStrLen=strLen;
        //set  ceiling for rotate arrow
        let maxWpm=120,
            arrowWpm=wpm < maxWpm ? wpm : maxWpm;
        //make arrow rotate base on wpm and maxWpm
        arrow.style.transform="rotate(" + ((arrowWpm * 2)-120) + "deg) translateY(-72%)";
        //finally create a digital speed display board
        let wpmStr=wpm;
        let wordSpeed=(wpmStr < 10)?"00" + wpmStr :wpmStr < 100?"0" + wpmStr:wpmStr;
        typingUnit.innerHTML=wordSpeed;
    };
    //initialize runtime loop
    let run=function(){
        setTimeout(run,1000);
        getWPM();
    };
    run();
}
typingMachine();