var tela = document.querySelector('#canvas');
var pincel = tela.getContext('2d');

var imagens = new ImageLibrary();
imagens.load("fish", "imagens/RedFish2.png");
imagens.load("backg", "imagens/sky.png");
imagens.load("enter", "imagens/enter.png");
imagens.load("rank", "imagens/rank.png");
imagens.load("info", "imagens/info.png");
imagens.load("voltar", "imagens/voltar.png");

//  --- Sons ---
//var audios = new AudioLibrary();
//audios.load("tiro", "sons/tiro.wav");

//  --- Variaveis ---
var estado = "menu";
var btn1 = new Botao(400,150,200,70);
var btn2 = new Botao(400,250,200,70);
var btn3 = new Botao(400,350,200,70);
var btn4 = new Botao(135,430,150,20);
var pontos = 0;

//  --- Funções ---
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function passo(t) {
    if(estado == "menu"){
      telaTitle();
      return;
    }else if (estado == "rank") {
      telaRank();
      return;
    }else if (estado == "info") {
        telaSobre();
    }else if (estado == "jogo") {
      pontos = 0;
    }
}
requestAnimationFrame(passo);

tela.onclick = function(e){
  var rectNav = tela.getBoundingClientRect();
  var pos = {
      x: e.clientX - rectNav.left,
      y: e.clientY - rectNav.top
  };
  if(estado == "menu"){
    if (pos.x>btn1.x && pos.x<(btn1.x+btn1.w) && pos.y>btn1.y && pos.y<(btn1.y+btn1.h)){
        telaJogo();
        estado = "jogo";
      } else if(pos.x>btn2.x && pos.x<(btn2.x+btn2.w) && pos.y>btn2.y && pos.y<(btn2.y+btn2.h)){
        telaRank();
        estado = "rank";
      } else if(pos.x>btn3.x && pos.x<(btn3.x+btn3.w) && pos.y>btn3.y && pos.y<(btn3.y+btn3.h)){
        telaSobre();
        estado = "info";
      }
  } else if (estado == "info" || estado == "rank") {
      if(pos.x>btn4.x && pos.x<(btn4.x+btn4.w) && pos.y>btn4.y && pos.y<(btn4.y+btn4.h)){
      telaTitle();
      estado = "menu";
      }
    }
}
