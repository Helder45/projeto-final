var option = {
  animation: true,
};

function alertar() {
  var email = document.getElementById("email_nov");

  if (email !== null && email.value === "") {

    var toastErr = document.getElementById("toastErr");
    var toastErro = new bootstrap.Toast(toastErr, option);
    toastErro.show();

  } else {

    var toastSuc = document.getElementById("toastSuc");
    var toastNice = new bootstrap.Toast(toastSuc, option);
    toastNice.show();
    email.value = "";

  }

}