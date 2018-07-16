var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// carregando imagens

var bird = new Image();
var bg = new Image();
var fg = new Image();
var canoCima = new Image();
var canoBaixo = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
canoCima.src = "images/canoCima.png";
canoBaixo.src = "images/canoBaixo.png";


// variáveis

var gap = 85;
var constant;

var bX = 10;
var bY = 150;

var gravity = 1.5;

var score = 0;

// carregando sons

var fly = new Audio();
var scor = new Audio();

fly.src = "sounds/fly.mp3";
scor.src = "sounds/score.mp3";


document.addEventListener("keydown",moveUp);

function moveUp(){
    bY -= 25;
    fly.play();
}



var cano = [];

cano[0] = {
    x : cvs.width,
    y : 0
};

// draw images

function draw(){

    ctx.drawImage(bg,0,0);


    for(var i = 0; i < cano.length; i++){

        constant = canoCima.height+gap;
        ctx.drawImage(canoCima,cano[i].x,cano[i].y);
        ctx.drawImage(canoBaixo,cano[i].x,cano[i].y+constant);

        cano[i].x--;

        if( cano[i].x == 125 ){
            cano.push({
                x : cvs.width,
                y : Math.floor(Math.random()*canoCima.height)-canoCima.height
            });
        }

        // detect collision

        if( bX + bird.width >= cano[i].x && bX <= cano[i].x + canoCima.width && (bY <= cano[i].y + canoCima.height || bY+bird.height >= cano[i].y+constant) || bY + bird.height >=  cvs.height - fg.height){
            location.reload(); // reload the page
        }

        if(cano[i].x == 5){
            score++;
            scor.play();
        }


    }

    ctx.drawImage(fg,0,cvs.height - fg.height);

    ctx.drawImage(bird,bX,bY);

    bY += gravity;

    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score,10,cvs.height-20);

    requestAnimationFrame(draw);

}

draw();
