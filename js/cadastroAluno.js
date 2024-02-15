import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

async function postAluno(){
    try {

        const formulario = document.getElementById('formularioAluno');

        const dados = {
                "name": formulario.name.value,
                "dataNascimento": formulario.dataNascimento.value,
                "cpf": formulario.cpf.value,
                "rg": formulario.rg.value,
                "sexo": formulario.sexo.value,
                "telefone": formulario.telefone.value
            };
            
        const resposta = await axios.post('https://localhost:7262/aluno', dados);  
        console.log("Dados do aluno salvo com sucesso!", resposta.data);
    } catch (error) {
        console.log("Erro na requisição POST: ", error);
    }
}
console.log(await postAluno());