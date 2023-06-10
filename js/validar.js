var senha = document.getElementById("senha"),
  nome = document.getElementById("nome"),
  email = document.getElementById("email"),
  confirmaSenha = document.getElementById("confirmaSenha");

var option = {
  animation: true,
};

function confirmaSub() {
  if (nome !== null && email !== null && senha !== null) {

    if (senha.value != confirmaSenha.value) {

      var toastErro = document.getElementById("toastErro");
      var toastErro = new bootstrap.Toast(toastErro, option);
      toastErro.show();

    } else {

      var toastConfirm = document.getElementById("toastConfirm");
      var toastConfirm = new bootstrap.Toast(toastConfirm, option);
      toastConfirm.show();

      nome.value = ""
      email.value = ""
      senha.value = ""
      confirmaSenha.value = ""

    }

    senha.onchange = validaSenha;
    confirmaSenha.onkeyup = validaSenha;

  }
}