document.addEventListener("DOMContentLoaded", function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://localhost:7262/aluno', true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Manipular a resposta do servidor (xhr.responseText)
            console.log(xhr.responseText);
        } else {
            // Tratar erros
            console.error('Erro na requisição:', xhr.statusText);
        }
    };

    xhr.send();
});
