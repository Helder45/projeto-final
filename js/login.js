var senha = document.getElementById("senha"),
    email = document.getElementById("email");

var option = {
    animation: true,
};

function confirmaLogin() {
    if (email !== null && email.value !== "" && senha !== null && senha.value !== "") {

        var toastConfirm = document.getElementById("toastConfirm");
        var toastConfirm = new bootstrap.Toast(toastConfirm, option);
        toastConfirm.show();

        email.value = ""
        senha.value = ""

    } else {

        var toastEmpty = document.getElementById("toastEmpty");
        var toastEmpty = new bootstrap.Toast(toastEmpty, option);
        toastEmpty.show();

        email.value = ""
        senha.value = ""

    }
}