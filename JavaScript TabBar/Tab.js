//get elements from the dom tree
const tabs=document.querySelectorAll(".tab-item");
const overlay=document.querySelector(".tab-overlay");
//tab is the previous element
let last=null;
//click event on each tab element
tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
       //alert("this are all active class");
       //toggle tab icon class active
       tab.classList.toggle("active");
       overlay.style.opacity="1";
       //toggle tab icon class off
       if(last){
           last.classList.toggle("active");
       }
       last=tab;
       //get all previous element siblings
       let sibs=[...tab.parentNode.children],
            i=sibs.indexOf(tab);
        let prev=sibs.slice(0,i);
        //adjust slider position
        overlay.style.left=`${prev.length*65}px`;
    });
});