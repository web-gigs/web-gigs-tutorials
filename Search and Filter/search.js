//get elements from the dom tree
const ul=document.querySelector(".search-items");
const input=document.getElementById("search-bar");
let users=Array.from(document.querySelectorAll("li"));
//Es6 filter function
let filterUsers=()=>{
    keyword=input.value.toLowerCase();
    filtered_users=users.filter(user=>{
        user=(user.innerHTML).toLowerCase();
        return user.indexOf(keyword)>-1;
    });
    //set all list items to display none
    users.forEach(li=> {
        li.style.display="none";
    });
    //set all filter items to display block
    filtered_users.forEach(li=>{
        li.style.display="block";
    })
}
input.addEventListener("keyup",filterUsers);