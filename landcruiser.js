var bluecar=document.getElementById("bluecar");
var whitecar=document.getElementById("whitecar");
var result=document.getElementById("result");
var game=document.getElementById("game");
var text=document.getElementById("text");
var score=0;

bluecar.addEventListener("animationiteration",function(){
    var random=((Math.floor(Math.random()*3))*130);
    bluecar.style.left=random+"px";
    score++;
});

window.addEventListener("keydown",function(e){
    if(e.keyCode=="39"){
        var whitecarleft=parseInt(window.getComputedStyle(whitecar).getPropertyValue("left"));
        if(whitecarleft<260)
        {
            whitecar.style.left=(whitecar+left+130)+"px";
        }
    };
    if(e.keyCode=="37")
    {
        var whitecarleft=parseInt(window.getComputedStyle(whitecar).getPropertyValue("left"));
        if(whitecarleft>0){
            whitecar.style.left=(whitecarleft-130)+"px";
        }
    }
})

setInterval(function gameover(){
    var bluecartop=parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"));
    var bluecarleft=parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"));
    var whitecarleft=parseInt(window.getComputedStyle(whitecar).getPropertyValue("left"));
    if((bluecarleft==whitecarleft)&&(bluecartop>250)&&(bluecartop<450))
    {
        result.style.display="block";
        game.style.display="none";  
        score.innerHTML=`Your score is $(score)`;   
        score=0;
    }
},10)