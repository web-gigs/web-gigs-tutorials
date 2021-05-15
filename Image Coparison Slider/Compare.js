var slider=document.querySelector(".slider");
var afterWrap=document.querySelector(".after-wrap");
//every Time the slider value changes adjust wrap image value
slider.addEventListener("input",function(e){
    var sliderPos=slider.value;
    afterWrap.style.width=(100 - sliderPos) + "%";
});