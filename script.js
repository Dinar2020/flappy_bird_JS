var hole = document.getElementById('hole');
var game = document.getElementById('game');
var score =0;
var jumping =0;







hole.addEventListener('animationiteration',RanHole)

function RanHole (){
    var random = -((Math.random()*350)+150)
    hole.style.top = random + 'px';
    score ++;
}


var fall = setInterval(function(){
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
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
    text.innerText = `Sua pontuação é :${score}`;
    game.style.display="none";
    score = 0;
    clearInterval(fall);

}


},100)





var movimento=document.addEventListener("keydown" ,moviment)


function moviment(document){

//Quando solta um tecla específica sinaliza o seu estado como não pressionado
//    document.addEventListener("keyup",hop, (event) => {
//     if (event.key == "ArrowUp") up = false;
//     if (event.key == "ArrowDown") down = false;
//   });
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue('top'));

    if((document.key== "ArrowUp") && (birdTop > 1)) {
        jumping =1;

        bird.style.top = (birdTop - 10) + "px";
    }
    else if ((document.key == "ArrowDown") && (birdTop > 1)) {

        jumping=0;

        bird.style.top = (birdTop + 10) + "px";

    }
    setTimeout(function(){
        jumping=0
    },100)
}





