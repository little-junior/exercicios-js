function ativarCampo() {
  var radioCPF = document.getElementById("pfisica");
  var radioCNPJ = document.getElementById("pjuridica");

  var campoCPF = document.getElementById("cpf");
  var campoCNPJ = document.getElementById("cnpj");
  var campoNascimento = document.getElementById("datanascimento");

  campoCPF.disabled = !radioCPF.checked;
  campoCNPJ.disabled = !radioCNPJ.checked;
  campoNascimento.disabled = !radioCPF.checked;
}

function alertaSucesso() {
  alert("Sucesso!\nCliente cadastrado!");
}
