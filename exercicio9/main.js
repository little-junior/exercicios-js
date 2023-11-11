function verificarSenha() {
  var senha = document.getElementById("senha").value;
  var senha_confirmacao = document.getElementById("confirmacao-senha").value;
  var login = document.getElementById("login").value;

  if (senha === "" || senha_confirmacao === "" || login === "") {
    return alert("Os campos não podem estar vazios!");
  }
  if (senha.length < 6 || senha.length > 10) {
    return alert("A senha necessita ter entre 6 a 10 caracteres");
  }
  if (senha != senha_confirmacao) {
    return alert("As senhas não coincidem. Tente novamente!");
  }

  document.querySelector("button").type = "submit";
  return alert("Bem vindo!");
}
