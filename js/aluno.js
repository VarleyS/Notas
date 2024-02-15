document.addEventListener('DOMContentLoaded', function () {
    const alunosListElement = document.getElementById('alunosList');

    // Realiza uma requisição GET para a API
    fetch('https://localhost:7262/Aluno')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
        })
        .then(alunos => {
            // Manipula os dados recebidos
            displayAlunos(alunos);
        })
        .catch(error => {
            // Trata erros
            console.error('Erro:', error);
            alunosListElement.innerHTML = 'Erro ao obter lista de alunos.';
        });

    // Função para exibir os alunos na página
    function displayAlunos(alunos) {
        alunosListElement.innerHTML = '';

        alunos.forEach(aluno => {
            const li = document.createElement('li');
            li.textContent = `${aluno.id}: 
            ${aluno.name} - 
            ${aluno.dataNascimento} - 
            ${aluno.cpf} - 
            ${aluno.rg} - 
            ${aluno.sexo} - 
            ${aluno.telefone}`;
            alunosListElement.appendChild(li);
        });
    }
});
