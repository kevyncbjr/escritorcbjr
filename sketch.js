
let palavra;

function setup() {
  createCanvas(600, 600);
  
  let palavras = ["Charlie Brown", "Pontes Indestrutiveis", "Céu Azul","Proibida Pra Mim", "Zói De Lula","Só Os Loucos Sabem", "Quebra Mar"];
  palavra = random(palavras);
}


function draw() {
  background("black");
  fill("red");
  textSize(64);
  textAlign(CENTER, CENTER)
  
  let maximo = width;
  let minimo = 0;
  
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let parcial = palavra.substring(0,quantidade);
  text(parcial,200,200);
  
//  if(mouseX < 50){
//    let palavra = "C";
//    text(palavra, 200, 200);
//  } else {
//    let palavra = "Charlie Brown";
//    text(palavra, 200, 200);
//  }
}

