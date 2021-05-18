//Getting Element from the dom tree
const id=(el)=>document.getElementById(el);
const clockHour=id("hour");
const clockMinute=id("min");
const clockSecond=id("sec");
const todayLabel=id("today");
const todateLabel=id("todate");
//Run A count Down timer Every Second
setInterval(countDown,1000);
//Function and our time object
function countDown(){
    //Initialize the date object
    const date=new Date();
    //Initialize clock Hours
    const currentHour=date.getHours();
    //Initialize clock Minutes
    const currentMinute=date.getMinutes();
    //Initialize clock Seconds
    const currentSecond=date.getSeconds();
    //Initialize Present Day and Month
    const currentDayOfWeek=date.toLocaleString("en-us",{weekday:"long"});
    const currentMonth=date.toLocaleString("en-us",{month:"long"});
    const currentDay=date.getUTCDate();
    //Function for Intergrating clock functionalities
    function setTime(){
        clockHour.style.transform=`rotate(${(currentHour * 30) + (currentMinute * .5)}deg)`;
        clockMinute.style.transform=`rotate(${(currentMinute * 6) + (currentSecond * 0.1)}deg)`;
        clockSecond.style.transform=`rotate(${currentSecond * 6}deg)`;
        //Output Present Day and Month
        todayLabel.textContent=currentDayOfWeek;
        todateLabel.textContent=`${currentMonth} ${currentDay}`;
    }
    //Adjust clock rotation
    if(hour>12){
        hour -=12;
    }
    //Call clock Functionalities
    setTime();
    return countDown;
};