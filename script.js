var hole = document.getElementById('hole');
var game = document.getElementById('game');
var score =0;
var jumping =0;







hole.addEventListener('animationiteration',RanHole)

function RanHole (){
    var random = -((Math.random()*350)+150)
    hole.style.top = random + 'px';
}


var fall = setInterval(function(){
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
    var birdBottom = parseInt(window.getComputedStyle(bird).getPropertyValue('bottom'));
    var gameHeight = parseInt(window.getComputedStyle(game).getPropertyValue('Height'));

if(jumping == 0)
    {
   
    bird.style.top = (birdTop + 10) +"px";
    
        
        

}

var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue('top'));
var hTop =(500+holeTop);

if((birdTop > 450) || ((blockLeft <50) && (blockLeft > -50)&&((birdTop<hTop)||(birdTop >hTop +100))))
{
    result.style.display ='block';
    text.innerText = `Your final score is :${score}`;
    game.style.display="none";
    score = 0;
    clearInterval(fall);

}


},100)


window.addEventListener("keydown",hop)

function hop(){

    jumping =1;

    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue('top'));

    if(birdTop > 6){

        bird.style.top = (birdTop - 60) + "px";
    }

    setTimeout(function(){
        jumping=0
    },100)
}







