//Variáveis da Bolinha
let xBolinha = 10 ;
let yBolinha = 19;
let diametro = 22;
let raio = diametro/2;

//Velocidade da Bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//Variáveis da Minha Raquete
let xRaquete = 5;
let yRaquete = 150;

//Variáveis da Raquete do Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//Variáveis de Ambas as Raquetes
let comprimentoRaquete = 10;
let alturaRaquete = 100;

let colidiu = false;

//Pontuação
let meusPontos = 0;
let pontosOponente = 0;

//Sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  colisaoRaqueteBiblioteca(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteP2Oponente();
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  incluirPlacar()
  marcaPonto();
  bolinhaNaoFicaPresa1();
  bolinhaNaoFicaPresa2();
  melhoriaDeVisual();
}

function mostraBolinha (){
  circle(xBolinha, yBolinha, diametro)
}

function movimentaBolinha (){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda (){
  if (xBolinha+raio > width || xBolinha-raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha+raio > height || yBolinha-raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete (x,y){
  rect(x, y, comprimentoRaquete, alturaRaquete, 5)
}

//Movimento da raquete do primeiro jogador
function movimentaRaquete(){
  if (keyIsDown(87)){
    yRaquete -= 10;
  }
  if (keyIsDown(83)){
    yRaquete += 10;
  }
}

//Verificação da colisão de ambas as raquetes
function colisaoRaqueteBiblioteca(x, y){
  colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, diametro);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

//Movimento da raquente com um segundo jogador como oponente
function movimentaRaqueteP2Oponente(){
  if (keyIsDown(UP_ARROW)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 10;
  }
}

//Placar da partida
function incluirPlacar(){
  textAlign(CENTER);
  textSize(16);
  strokeWeight(2);
  stroke(255);
  fill(color(0,0,255));
  rect(130, 10, 40, 20, 5);
  noStroke();
  fill(255);
  text(meusPontos, 150, 26);
  stroke(255);
  fill(color(255,0,0));
  rect(430, 10, 40, 20, 5);
  noStroke();
  fill(255);
  text(pontosOponente, 450, 26);
}

//Marcação da pontuação, considerando a chance do oponente errar
function marcaPonto(){
  if (xBolinha > 587){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 13){
    pontosOponente += 1;
    ponto.play();
  }
}

function bolinhaNaoFicaPresa1(){
    if (xBolinha-raio < 0){
    xBolinha = 23;
    }
}

function bolinhaNaoFicaPresa2(){
    if (xBolinha+raio > 600){
    xBolinha = 577;
    }
}

//Adereços para melhorar o visual do jogo
function melhoriaDeVisual(){
  rect(298, 3, 4, 34);
  rect(298, 43, 4, 34);
  rect(298, 83, 4, 34);
  rect(298, 123, 4, 34);
  rect(298, 163, 4, 34);
  rect(298, 203, 4, 34);
  rect(298, 243, 4, 34);
  rect(298, 283, 4, 34);
  rect(298, 323, 4, 34);
  rect(298, 363, 4, 34);
}
