var listElemento = document.querySelector('#pagina ul')
var inputElemento = document.querySelector('#pagina input')
var buttonAdicionarElemento = document.querySelector('#pagina button#adicionar')
var buttonRemoverElementos = document.querySelector('#pagina button#apagarTudo')
var todosTextos = JSON.parse(localStorage.getItem('lista_todos')) || []

function adicionarLI(){
    var liTexto = inputElemento.value
    todosTextos.push(liTexto)
    inputElemento.value = ''
    renderizarLI()
    salvarLista()
}

function renderizarLI(){
    listElemento.innerHTML = ''
    for(texto of todosTextos){
        var liElemento = document.createElement('li')
        var liText = document.createTextNode(texto)
        var linkElemento = document.createElement('a')
        var linkText = document.createTextNode('Excluir')
        var pos = todosTextos.indexOf(texto)
        linkElemento.setAttribute('href', '#')
        linkElemento.setAttribute('onclick', 'excluirLI('+ pos +')')
        linkElemento.appendChild(linkText)
        liElemento.appendChild(liText)
        liElemento.appendChild(linkElemento)
        listElemento.appendChild(liElemento)
    
    }
}

function excluirLI(pos){
    todosTextos.splice(pos, 1)
    renderizarLI()
    salvarLista()
}

function excluirTudo(){
    todosTextos = []
    renderizarLI()
    salvarLista()
}

function salvarLista(){
    localStorage.setItem('lista_todos', JSON.stringify(todosTextos))
}

buttonAdicionarElemento.onclick = adicionarLI
buttonRemoverElementos.onclick = excluirTudo
inputElemento.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) { 
        adicionarLI()
    }
})
renderizarLI()