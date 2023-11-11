function mudarCorFonte(cor) {
  document.querySelector("p").style.color = cor;
}

function mudarCorFundo(cor) {
  document.querySelector("p").style.backgroundColor = cor;
}

let tamanhoFonte = 1;

function aumentarFonte() {
  if (tamanhoFonte < 3) {
    tamanhoFonte++;
    document.querySelector("p").style.fontSize = tamanhoFonte + "em";
  }
}

function diminuirFonte() {
  if (tamanhoFonte > 1) {
    tamanhoFonte--;
    document.querySelector("p").style.fontSize = tamanhoFonte + "em";
  }
}

function transformarMaiusculo() {
  document.querySelector("p").innerText = document
    .querySelector("p")
    .innerText.toUpperCase();
}

function transformarMinusculo() {
  document.querySelector("p").innerText = document
    .querySelector("p")
    .innerText.toLowerCase();
}
