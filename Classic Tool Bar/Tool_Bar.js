//Get All Our elements from the dom tree
let menu_bar=document.querySelector(".bottom-bar");
let menu_item=document.querySelectorAll(".menu-item");
let menu_indicator=document.querySelector(".nav-indicator");
let menu_current_item=document.querySelector(".select-current");
let menu_position;

//Move menu_idicator to the initial menu position
menu_position=menu_current_item.offsetLeft - 16;
menu_indicator.style.left= menu_position + "px";
menu_bar.style.backgroundPosition = menu_position - 8 + "px";
//Select Each Menu Item and Toggle it's Position
menu_item.forEach(
    function(select_menu_item){
        select_menu_item.addEventListener("click" ,
        function(e){
            //prevent default position
            e.preventDefault();
            //set menu bar postion when the font-awesome icon is clicked
            menu_position = this.offsetLeft - 16;
            menu_indicator.style.left=menu_position + "px";
            menu_bar.style.backgroundPosition=menu_position - 8 + "px";
            //Use spread parameter for adjusting icon translate properties
            [...select_menu_item.parentElement.children].forEach(
                sibling =>{
                    sibling.classList.remove("select-current");
                })
                select_menu_item.classList.add("select-current");
        });
    }
)
