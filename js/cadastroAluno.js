/*const formulario = document.getElementById('formularioAluno');

const dados = new FormData(formulario);

const xhr = new XMLHttpRequest();

xhr.open('POST', 'https://localhost:7262/aluno', true);

xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
        console.log(xhr.responseText);
    }
};

const dadosJson = {};
dados.forEach((value, key) => {
    dadosJson[key] = value;
});
xhr.send(JSON.stringify(dadosJson));
*/

//---------------------------------------------------------------------------

const formulario = document.getElementById('formularioAluno');
const formData = new FormData(formulario);

// Convert the FormData object to a JSON object
const dadosJson = {};
for (let [key, value] of formData.entries()) {
    dadosJson[key] = value;
}

// Send the request using Axios
axios.post('https://localhost:44346/Aluno', dadosJson)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
