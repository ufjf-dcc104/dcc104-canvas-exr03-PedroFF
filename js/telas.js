function telaJogo()
{
  var c = 0;
  pincel.fillStyle = "black";
  pincel.fillRect(0,0, tela.width, tela.height);
  pincel.font="20px Arial";
  imagens.draw(pincel,"backg", 0, 0);
  pincel.fillStyle = "black";
  pincel.fillText("Pontuação: " + pontos, 50,50);

  // --- Desenhando ---
  imagens.draw(pincel,"canoCima",cX,cY);
  imagens.draw(pincel,"canoBaixo",cX,cY + c);
  imagens.draw(pincel, "foreground",0,tela.height-fg.height);
  imagens.draw(pincel, "fish", fish.x,fish.y);


  for(var i = 0; i<canos.length; i++){
    imagens.draw(pincel,"canoCima", canos[i].x, canos[i].y);
    imagens.draw(pincel,"canoBaixo", canos[i].x, canos[i].y+ c);
    pipe[i].x--;
    if (canos[i].x == tela.width - 300) {
        canos.push(
          x:tela.width,
          y:Math.floor(Math.random()*canoCima.height) - canoCima.height
        );
    }
  }
  fish.y+= G;
  requestAnimationFrame(passo);
}

function telaTitle()
{

  pincel.fillStyle = "Black";
  pincel.fillRect(0,0, tela.width, tela.height);
  imagens.draw(pincel,"backg", 0, 0);
  pincel.font="Bold 35px Arial";
  pincel.fillText("Bem-vindo Flappy Fish", 300, 100);
  pincel.fillRect(btn1.x,btn1.y, btn1.w, btn1.h);
  pincel.fillRect(btn2.x,btn2.y, btn2.w, btn2.h);
  pincel.fillRect(btn3.x,btn3.y, btn3.w, btn3.h);
  imagens.draw(pincel,"enter",400, 150);
  imagens.draw(pincel,"rank", 400, 250);
  imagens.draw(pincel,"info", 400, 350);


  requestAnimationFrame(passo);
}

function telaSobre() {
  pincel.fillStyle = "black";
  pincel.fillRect(0,0, tela.width, tela.height);
  imagens.draw(pincel,"backg", 0, 0);
  pincel.font="Bold 35px Arial";
  pincel.fillText("Bem-vindo Flappy Fish", 300, 100);
  pincel.font="18px Arial";
  pincel.fillText("O objetivo do jogo é passar pelos túneis,", 300, 200);
  pincel.fillText("para isso usará a seta pra cima para pular.", 300, 230);
  pincel.fillText("Quanto mais túneis passar, maior será sua pontuação.", 300, 260);
  pincel.fillText("Aperte ESC ou clique na seta, para voltar ao menu.", 300, 290);
  pincel.fillText("Bom jogo!",400, 360);
  pincel.fillRect(btn4.x,btn4.y, btn4.w, btn4.h);
  imagens.draw(pincel,"voltar", 10, 400);
  requestAnimationFrame(passo);
}

function telaRank() {
  pincel.fillStyle = "black";
  pincel.fillRect(0,0, tela.width, tela.height);
  imagens.draw(pincel,"backg", 0, 0);
  pincel.font="Bold 70px Arial";
  pincel.fillText("Rank", 400, 100);
  if(localStorage.getItem('pontos') != null){
    ordenaRank();
    var retomaPont = JSON.parse(localStorage.getItem('pontos'));
    pincel.font="Bold 35px Arial";
    pincel.fillText("NOME", 340, 200);
    pincel.fillText("SCORE", 480, 200);
    var j = 50
    for (var i = 0; i < retomaPont.length && i <= 5; i++) {
      pincel.fillText(1+i +". " + retomaPont[i].nome, 300, 200+j);
      pincel.fillText(retomaPont[i].pontos, 480, 200+j);
      j+=50;
    }
  }else{
    var pontos = [{"nome":"Pedro", "pontos":50}];
    localStorage.setItem('pontos', JSON.stringify(pontos));
    var retomaPont = JSON.parse(localStorage.getItem('pontos'));
    pincel.font="Bold 35px Arial";
    pincel.fillText("NOME", 300, 200);
    pincel.fillText("SCORE", 480, 200);
    var j = 50
    pincel.fillText("1. " + retomaPont[0].nome, 300, 200+j);
    pincel.fillText(retomaPont[0].pontos, 480, 200+j);
  }

  pincel.fillRect(btn4.x,btn4.y, btn4.w, btn4.h);
  imagens.draw(pincel,"voltar", 10, 400);
}

// --- Funções que tratam os pontos ---

function salvarpontos() {
  if(localStorage.getItem('pontos') != null){
    var retomaPont = JSON.parse(localStorage.getItem('pontos'));
    var nome = document.querySelector('#nome').value;
    retomaPont.push({'nome':nome , 'pontos': pontos});
    localStorage.setItem('pontos',JSON.stringify(retomaPont));
  }else{
    var pontos = [{"nome":"Pedro", "pontos":50}];
    localStorage.setItem('pontos', JSON.stringify(pontos));
  }
}

function compare(a,b) {
  if (a.pontos > b.pontos)
     return -1;
  if (a.pontos < b.pontos)
    return 1;
  return 0;
}


function ordenaRank() {
  if(localStorage.getItem('pontos') != null){
    var retomaPont = JSON.parse(localStorage.getItem('pontos'));
    retomaPont.sort(compare);
    localStorage.setItem('pontos', JSON.stringify(retomaPont));
  }
}
