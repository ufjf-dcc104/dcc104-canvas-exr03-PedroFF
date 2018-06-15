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
function passo(t) {
  
}
