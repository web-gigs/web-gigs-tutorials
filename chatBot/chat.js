window.onload = function(){
  //toggle sideBar on and off 
     let toggleState=0;
     const $Id=(el)=>document.getElementById(el);
     const $ = (el) => document.querySelector(el);
     const button=$(".btn");
     const listMenu=$(".dropdown");
     const active=$Id("active");
     const textBox=$Id("inputBox");
     const sendBox=$Id("sendMessage");
     const message_box=$(".massege-box");
  //creating event for sidBar toggleMenu
     button.addEventListener("click",toggleMenu);
     sendBox.addEventListener("click",sendMessage);
  //function for events
     function toggleMenu(){
       if(toggleState==0){
         listMenu.style.visibility="visible";
         listMenu.style.transform="scale(1) translate(-10px,10px)";
         toggleState=1;
       }else{
         listMenu.style.visibility="hidden";
         listMenu.style.transform="scale(0)";
         toggleState=0;
       }
     }
  //initialize conversation
    setTimeout(startMessage,2000);
    function startMessage(){
      let msg_Kukubot=document.createElement("div");
      let msg_content=document.createTextNode("Hey there i am kukubot. Your new assistance...");
      msg_Kukubot.appendChild(msg_content);
      msg_Kukubot.className="msg_kukubot";
      message_box.appendChild(msg_Kukubot);
    }
  //user conversation
  function sendMessage(){
    let userInput=textBox.value.toString();
    let msgUser=document.createElement("p");
    let msgUserBox=document.createElement("div");
    msgUser.textContent=userInput;
    msgUserBox.appendChild(msgUser);
    message_box.appendChild(msgUserBox);
    msgUserBox.className="userInputText";
    //initializing function for kukuBot Messages
    let typing=setTimeout(initMsg,3000);
    function initMsg(){
      askQuestion(arr);
    }
    //check message box and if kuku Bot is active or not
    if(textBox.value==""||textBox.value==" "){
      clearTimeout(typing);
      alert("kuku Bot don't respond to empty text.");
    }else{
      active.innerHTML="typing...";
      setTimeout(activeFunc,2000);
      function activeFunc(){
        active.innerHTML="active";
      }
    }
    //getting current time for each message
    function printTime(){
      let date=new Date();
      let hours=date.getHours();
      let mins=date.getMinutes();
      let time=document.createElement("span");
      time.id="currentTime";
      let frame;
      if(hours<=12){
        frame="AM";
      }else{
        frame="PM"
      }
      time.innerHTML=`${hours}:${mins}${frame}`;
      time.innerHTML=`${hours}:${mins}${frame}`;
      msgUserBox.appendChild(time);
      }
    setInterval(printTime,100);
  }
  //kukuBot Message generator
  function askQuestion(arr){
    const randIndex=Math.floor(Math.random()* arr.length);
    let questionMsg=document.createElement("p");
    let BotWrapper=document.createElement("div")
    BotWrapper.appendChild(questionMsg);
    BotWrapper.className="msg_kukubot";
    questionMsg.innerHTML=arr[randIndex];
    message_box.appendChild(BotWrapper);
    //getting current time for each message
    function kukuTime(){
      let date=new Date();
      let hours=date.getHours();
      let mins=date.getMinutes();
      let time=document.createElement("span");
      time.id="kukuTime";
      //check Time Frame
      let frame;
      if(hours<=12){
        frame="AM";
      }else{
        frame="PM"
      }
      time.innerHTML=`${hours}:${mins}${frame}`;
      BotWrapper.appendChild(time);
      }
    setInterval(kukuTime,100);
  }
 
};