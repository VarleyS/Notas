const loginButton = document.getElementById("login");
        loginButton.addEventListener("click", () => {
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;
            // Aqui você pode adicionar a lógica de autenticação
            // Para este exemplo, apenas exibiremos as credenciais inseridas no console.
            const user = users.find(user => user.email === email && user.senha === senha);

            if(user){
                alert(`Bem vindo ao sistema!`);
            }else {
                alert("Credenciais inválidas. Tente novamente.");
            }

            console.log("E-mail: " + email);
            console.log("Senha: " + senha);
        });

        const users = [
            { email: "varleysr@gmail.com", senha: "senha123" },
            { email: "outro@email.com", senha: "outrasenha" }
        ];

document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registro-form");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        if(name && email && senha) {
            const userData = {
                name: name,
                email: email,
                senha: senha
            };

            if(userData)
                alert("Dados do usuário registrado:", userData);

            window.location.href = "index.html";
        } else {
            alert('Preencha todos os campos');
        }
    });
});