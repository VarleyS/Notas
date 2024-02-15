/*
document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("studentForm");

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
*/

var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://localhost:7262/aluno', true);

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

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const dataNascimento = document.getElementById("datanasc").value;
    const cpf = document.getElementById("cpf").value;
    const rg = document.getElementById("rg").value;
    const sexo = document.getElementById("sexo").value;
    const telefone = document.getElementById("tel").value;

    if (name && dataNascimento && cpf && rg && sexo && telefone) {
        const alunData = {
            name: name,
            dataNascimento: dataNascimento,
            cpf: cpf,
            rg: rg,
            sexo: sexo,
            telefone: telefone
        };

        if (alunData)
            alert("Dados do usuário registrado:", alunData);
        else
            console.log("Dados do usuário registrado:", alunData);

        window.location.href = "index.html";
    } else {
        alert('Preencha todos os campos');
    }
});