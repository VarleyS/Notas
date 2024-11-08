const loginButton = document.getElementById("login");

loginButton.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Realiza uma requisição GET para a API
    fetch('https://localhost:44346/Usuario')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
        })
        .then(usuarios => {
            // Valida as credenciais dos usuários
            validaUsuarios(usuarios, email, senha);
        })
        .catch(error => {
            console.error('Erro:', error);
            document.getElementById('usuariosListElement').innerHTML = 'Erro ao obter lista de usuários.';
        });
});

// Função para validar os usuários e credenciais
function validaUsuarios(usuarios, email, senha) {
    const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.password === senha);

    if (usuarioEncontrado) {
        alert(`Bem-vindo ao sistema, ${usuarioEncontrado.name}!`);
        window.location.href = 'home.html';

    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registro-form");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        if (name && email && senha) {
            const userData = {
                name: name,
                email: email,
                senha: senha
            };

            // Exibe os dados do usuário registrado
            alert(`Dados do usuário registrado: ${JSON.stringify(userData)}`);

            // Redireciona para a página de login
            window.location.href = "index.html";
        } else {
            alert('Preencha todos os campos');
        }
    });
});
