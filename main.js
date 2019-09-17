//criar um quadrado instanciando a classe
const quadrado = new Retangulo(0,0,50)

function loop(){
    //limpa o canvas
    ctx.clearRect(0,0,width, height)
    //mover o quadrado
    quadrado.move()
    //desenhar quadrado na tela usando o método dentro da classe
    quadrado.desenha()
    //
    requestAnimationFrame(loop)
}

loop()