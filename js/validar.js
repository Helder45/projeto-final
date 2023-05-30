var senha = document.getElementById("senha"),
confirmaSenha = document.getElementById("confirmaSenha");


function validaSenha() {
if (senha.value != confirmaSenha.value) {
  confirmaSenha.setCustomValidity("As senhas não conferem!");
} else {
  confirmaSenha.setCustomValidity("");
}
}

senha.onchange = validaSenha;
confirmaSenha.onkeyup = validaSenha;