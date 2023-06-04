var option = {
  animation: true,
};

var campo = document.getElementById("email_nov");

function toastReal() {
  var myToast = document.getElementById("toast");

  var toastEl = new bootstrap.Toast(myToast, option);

  if (campo !== null && campo.value === "") {
    console.log(campo.value, typeof campo.value);
    campo.setCustomValidity("Você precisa preencher este campo!");
  }

  toastEl.show();

}