let valorDeVerificacao = 0;

function verificarDisponibilidadeBotao(identificacao) {
  valorDeVerificacao += identificacao.checked ? 1 : -1;

  document.querySelector("button").disabled =
    valorDeVerificacao >= 2 ? false : true;
}
