import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

async function postAluno(){
    try {
        const formulario = document.getElementById('formularioAluno');
        const dados = {
                name: formulario.name.value, 
                dataNascimento: formulario.dataNascimento.value,
                cpf: formulario.cpf.value,
                rg: formulario.rg.value,
                sexo: formulerio.sexo.value,
                telefone: formulario.telefone.value
            };
            
            await axios.post("http://localhost:8082/alunos",dados)
                      .then(function (response){
                          console.log(response);
                           window.location.href="index.html";
                       })
        
    } catch (error) {
        alert ("Erro ao enviar os dados");
        console.log(erro);
    }
}
   /*     const resposta = await axios.post('https://localhost:7262/aluno', dados);  
        console.log("Dados do aluno salvo com sucesso!", resposta.data);
    } catch (error) {
        console.log("Erro na requisição POST: ", error);
    }
}*/
