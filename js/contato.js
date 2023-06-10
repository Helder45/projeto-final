var nome = document.getElementById("nome"),
    email = document.getElementById("email"),
    msg = document.getElementById("mensagem"),
    celular = document.getElementById("telefone");

var option = {
    animation: true,
};

function enviaMsg() {
    if (nome !== null && nome.value !== "" && email !== null && email.value !== "" && msg !== null && msg.value !== "" && celular !== null && celular.value !== "") {

            var toastConfirm = document.getElementById("toastConfirm");
            var toastConfirm = new bootstrap.Toast(toastConfirm, option);
            toastConfirm.show();

            nome.value = ""
            email.value = ""
            msg.value = ""
            celular.value = ""

    } else {

        var toastEmpty = document.getElementById("toastEmpty");
        var toastEmpty = new bootstrap.Toast(toastEmpty, option);
        toastEmpty.show();

    }
}