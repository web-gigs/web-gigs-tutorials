//Run Function when the Dom is fully loaded
document.addEventListener("DOMContentLoaded",function(){
    alert("Cool our dom elements has loaded")
    //get the button elements
    let plus=document.getElementById("plus");
    let button=document.querySelector(".fab");
    button.addEventListener("click",function(){
        alert("the plus button is active");
        //get the navBar element
        let navBar=document.querySelector(".nav");
        //toggle between classNames
        navBar.classList.toggle("open");
        //check condition to open nav bar Menu
        if(navBar.classList.contains("open")){
            plus.classList="fa fa-times";
            plus.style.transform="rotate(180deg)";
        }else{
            plus.classList="fa fa-plus";
            plus.style.transform="rotate(-180deg)";
        }
    });
});