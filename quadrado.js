/*SEMPRE utilizar o THIS dentro de uma classe, pois assim
tudo que contém THIS pode ser acessado como um método mais tarde*/
function Retangulo(x, y, size, cor){
    this.x = x;
    this.y = y;
    this.size = size;
    this.cor = cor;
    let flagX = false;
    let flagY = false;
    this.move = () =>{
        if(this.x+this.size >= direitaTela){
            flagX = true;
        }
        if(this.y+this.size >= baseTela){
            flagY = true;
        }
        if(this.x == esquerdaTela){
            flagX = false;
        }
        if(this.y == topoTela){
            flagY = false;
        }
        if(flagX == false){  //movimenta para direita ok
            let aux = 10;
            this.x = this.x + aux;
        }else{
            let aux = -10;
            this.x = this.x + aux;
        }
        if(flagY == false){  //morivementa para baixo ok
            let aux = 10;
            this.y = this.y + aux;
        }else{  //movimenta para cima fail
            let aux = -10;
            this.y = this.y +aux;
        }
    };
    this.desenha = ()=>{
        let r = Math.random()*255+1;
        let g = Math.random()*255+1;
        let b = Math.random()*255+1;
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);
        ctx.restore();
    };
    this.limpar = () =>{
        ctx.clearRect(0,0,canvas.width, canvas.height);
    };
}