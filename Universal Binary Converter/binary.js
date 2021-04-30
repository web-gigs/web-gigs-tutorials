//getting element from the dom tree
const id=(el)=>document.getElementById(el);
const inputValue=id("inputValue");
const outputValue=id("outputValue");
const calcBtn=id("calculate");
//function and Event listeners
calcBtn.addEventListener("click",btnCalculate);
function btnCalculate(){
    let number=inputValue.value;
    //check if input is a number
    if(isNaN(number)||number==""){
        alert("ERRO: value is not a number");
        outputValue.value="";
    }else{
        function bin(num){
            var res="";
            while(num>0){
                res=num%2 + res;
                num=Math.floor(num/2)
            }
            return res;
        }
        outputValue.value=bin(number);
    }

}