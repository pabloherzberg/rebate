//pegar o elemento canvas
const canvas = document.querySelector('canvas')
//pegar a largura e altura da janela usando LET pois são variáveis
let width = window.innerWidth
let height = window.innerHeight
//definir o tamanho do canvas utilizando a largura e altura da tela
canvas.width = width
canvas.height = height
//pegar o contexto do canvas e definir como 2d
const ctx = canvas.getContext('2d')
//definir os limites da tela
let esquerdaTela = 0
let direitaTela = width
let topoTela = 0
let baseTela = height
//inserir um evento de escuta na janela para cada vez que for
//redimencionada recarregar para redefinir os valores do width e height
window.onresize = function(){
    window.location.href = 'index.html'
}
