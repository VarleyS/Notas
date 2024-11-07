document.addEventListener('DOMContentLoaded', function () {
    const alunosListElement = document.getElementById('alunosList');

    // Realiza uma requisição GET para a API
    fetch('https://localhost:44346/Aluno')
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
            alunosListElement.innerHTML = '<tr><td colspan="6">Erro ao obter lista de alunos.</td></tr>';
        });

    // Função para exibir os alunos na página
    function displayAlunos(alunos) {
        alunosListElement.innerHTML = '';

        alunos.forEach(aluno => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${aluno.name}</td>
                <td>${aluno.dataNascimento}</td>
                <td>${aluno.cpf}</td>
                <td>${aluno.rg}</td>
                <td>${aluno.sexo}</td>
                <td>${aluno.telefone}</td>
            `;
            alunosListElement.appendChild(row);
        });
    }
});
