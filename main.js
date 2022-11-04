const form = document.getElementById('formulario')
let contatos = ''
const nomes = []
const telefones = []

form.addEventListener('submit', function(e){
    e.preventDefault()
    addLinha()
    atualizaTab()
})

function addLinha() {
    const nome = document.getElementById('contato')
    const telefone = document.getElementById('telefone')

    if (nomes.includes(nome.value)) {
        alert (`O contato ${nome.value} já foi cadastrado`)
    } else {
        nomes.push(nome.value)
        telefones.push(telefone.value)
    
        let linha = '<tr>'
        linha += `<td><img src="./images/hominho.png" alt="Ícone representando uma pessoa"> ${nome.value}</td>`
        linha += `<td> <img src="./images/tel.png" alt="Ícone de um telefone"> <a href="tel:${telefone.value}">${telefone.value}</a></td>`
        linha += `</tr>` 
        contatos += linha
    }

    nome.value = ''
    telefone.value = ''
}

function atualizaTab() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = contatos
}