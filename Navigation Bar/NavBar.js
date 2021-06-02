//Get Elements for the dom tree
const toggleBtn=document.querySelector(".sidebar-toggle");
const sidebar=document.querySelector(".sidebar");
const icon=document.getElementById("toggle");
//call the click event when the toggle button is clicked
toggleBtn.addEventListener("click",function(){
    alert("Cool, Nav bar toggle function is active");
    //close navigation side bar
    toggleBtn.classList.toggle("is-closed");
    sidebar.classList.toggle("is-closed");
    //check condition to toggle icon open or close
    if(toggleBtn.classList.contains("is-closed")){
        //change icon to open
        icon.classList="fa fa-list";
        icon.style.transform="rotate(180deg)";
    }else{
        //change icon to close
        icon.classList="fa fa-times";
        icon.style.transform="rotate(-180deg)";
    }
});