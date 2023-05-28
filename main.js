const form = document.getElementById('form-contato');
const imgContato = '<img src="./images/telefone.png" alt ="telefone" />';

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const inputContato = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-contato');

        let linha = '<tr>';
        linha += `<td>${inputContato.value}</td>`;
        linha += `<td> ${inputNumero.value}</td>`;
        linha += `<td> ${inputNumero.value = imgContato} </td>`
        linha += '</tr>';

        linhas += linha;
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    

    inputContato.value ='';
    inputNumero.value ='';
});
