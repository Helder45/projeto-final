var senha = document.getElementById("senha"),
  nome = document.getElementById("nome"),
  email = document.getElementById("email"),
  confirmaSenha = document.getElementById("confirmaSenha");

var option = {
  animation: true,
};

function confirmaSub() {
  if (nome !== null && nome.value !== "" && email !== null && email.value !== "" && senha !== null && senha.value !== "") {

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

  } else{

    var toastEmpty = document.getElementById("toastEmpty");
      var toastEmpty = new bootstrap.Toast(toastEmpty, option);
      toastEmpty.show();

  }
}