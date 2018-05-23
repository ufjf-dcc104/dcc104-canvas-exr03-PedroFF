var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = '#33CCFF';
pincel.fillRect(0,0,tela.width,tela.height);
pincel.fillStroke = 'black';
pincel.strokeRect(0,0,tela.width,tela.height);
