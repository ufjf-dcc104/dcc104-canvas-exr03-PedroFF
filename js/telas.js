function telaJogo()
{
  pincel.fillStyle = "black";
  pincel.fillRect(0,0, tela.width, tela.height);
  pincel.font="20px Arial";
  imagens.draw(pincel,"backg", 0, 0);
  pincel.fillStyle = "white";
  pincel.fillText("Pontuação: " + pontos, 50,50);
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
  imagens.draw(pincel,"voltar", 100, 400);
  requestAnimationFrame(passo);
}

function telaRank() {
  pincel.fillStyle = "black";
  pincel.fillRect(0,0, tela.width, tela.height);
  imagens.draw(pincel,"backg", 0, 0);
  pincel.font="Bold 70px Arial";
  pincel.fillText("Rank", 150, 100);
  if(localStorage.getItem('pontuacao') != null){
    ordenaRank();
    var retomaPont = JSON.parse(localStorage.getItem('pontuacao'));
    pincel.font="Bold 35px Arial";
    pincel.fillText("NOME", 100, 200);
    pincel.fillText("SCORE", 280, 200);
    var j = 50
    for (var i = 0; i < retomaPont.length && i <= 5; i++) {
      pincel.fillText(1+i +". " + retomaPont[i].nome, 100, 200+j);
      pincel.fillText(retomaPont[i].pontuacao, 280, 200+j);
      j+=50;
    }
  }else{
    var pontuacao = [{"nome":"Pedro", "pontuacao":50}];
    localStorage.setItem('pontuacao', JSON.stringify(pontuacao));
    var retomaPont = JSON.parse(localStorage.getItem('pontuacao'));
    pincel.font="Bold 35px Arial";
    pincel.fillText("NOME", 100, 200);
    pincel.fillText("SCORE", 280, 200);
    var j = 50
    pincel.fillText("1. " + retomaPont[0].nome, 100, 200+j);
    pincel.fillText(retomaPont[0].pontuacao, 280, 200+j);
  }

  pincel.fillRect(btn4.x,btn4.y, btn4.w, btn4.h);
  imagens.draw(pincel,"voltar", 100, 400);
}

// --- Funções que tratam os pontos ---

function salvarPontuacao() {
  if(localStorage.getItem('pontuacao') != null){
    var retomaPont = JSON.parse(localStorage.getItem('pontuacao'));
    var nome = document.querySelector('#nome').value;
    retomaPont.push({'nome':nome , 'pontuacao': pontos});
    localStorage.setItem('pontuacao',JSON.stringify(retomaPont));
  }else{
    var pontuacao = [{"nome":"Pedro", "pontuacao":300}];
    localStorage.setItem('pontuacao', JSON.stringify(pontuacao));
  }
}

function compare(a,b) {
  if (a.pontuacao > b.pontuacao)
     return -1;
  if (a.pontuacao < b.pontuacao)
    return 1;
  return 0;
}


function ordenaRank() {
  if(localStorage.getItem('pontuacao') != null){
    var retomaPont = JSON.parse(localStorage.getItem('pontuacao'));
    retomaPont.sort(compare);
    localStorage.setItem('pontuacao', JSON.stringify(retomaPont));
  }
}
