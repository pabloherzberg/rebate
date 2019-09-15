var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const inputVermelho = document.querySelector('#vermelho');
const inputVerde = document.querySelector('#verde');
const inputAzul = document.querySelector('#azul');
const inputVelocidade = document.querySelector('#velocidade');
const inputGiro = document.querySelector('#giro');
let r = 0;
let g = 0;
let b = 0;
let velocidade = 1;
let giro = 1;

inputVermelho.addEventListener('input',function(){
    r = inputVermelho.value;
},false);
inputVerde.addEventListener('input',function(value){
    g = inputVerde.value;
},false);
inputAzul.addEventListener('input',function(value){
    b = inputAzul.value;
},false);
inputVelocidade.addEventListener('input',function(value){
    velocidade = inputVelocidade.value;
},false);
inputGiro.addEventListener('input',function(value){
    giro = inputGiro.value;
},false);

function Retangulo(x, y, size, angle){
    this.x = x;
    this.y = y;
    this.size = size;
    this.angle = angle;
    let flagX = false;
    let flagY = false;
    this.move = () =>{
        this.angle++;
        if(this.x == canvas.width - this.size/2){
            flagX = true;
        }
        if(this.y == canvas.height - this.size/2){
            flagY = true;
        }
        if(this.x == 0 + this.size/2){
            flagX = false;
        }
        if(this.y == 0 + this.size/2){
            flagY = false;
        }
        if(flagX == false){  //movimenta para direita ok
            let aux = velocidade;
            this.x = this.x + aux;
        }else{
            let aux = -velocidade;
            this.x = this.x + aux;
        }
        if(flagY == false){  //morivementa para baixo ok
            let aux = velocidade;
            this.y = this.y + aux;
        }else{  //movimenta para cima fail
            let aux = -velocidade;
            this.y = this.y +aux;
        }
    };
    this.desenha = ()=>{
       /* let r = Math.random()*255+1;
        let g = Math.random()*255+1;
        let b = Math.random()*255+1;*/
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(this.angle*Math.PI/180);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);
        ctx.restore();
    };
    this.limpar = () =>{
        ctx.clearRect(0,0,canvas.width, canvas.height);
    };
}
let rect = new Retangulo(40,40,80, 2); //rect1 com centro posicionada na coordenada 40,40

let intervalo = setInterval(montarCena, 50);

function montarCena(){
    rect.limpar();
    rect.move();
    rect.desenha();
}
 /*
 1 	strokeRect(x,y,w,h);
///////////////////////////////////
2	ctx.shadowOffsetX=50;
	ctx.shadowColor='#02f520';
	ctx.shadowBlur=1;
	ctx.fillRect(50,50,50,50);
////////////////////////////////////
3
	a	
    Porque não foram utilizados os métodos save()/restore()
 para resetar as propriedades definidas no método translate() 
do retângulo anterior. Por isso o novo retângulo tem como origem
do contexto a posição setada neste método pelo retângulo anterior.

	b
			método 1;

	ctx.save(); //salvamos o estado do contexto.
	ctx.fillStyle = "#6C7B8B";
	ctx.fillRect(0,0,80,80);

	ctx.translate(160,160);
	ctx.fillStyle = "#CDB7B5";
	ctx.fillRect(0,0,80,80);

	ctx.restore();//restauramos o estado do contexto.
	ctx.fillStyle = "#63B8FF";
	ctx.fillRect(100,100,80,80); 
			
			método 2

	ctx.fillStyle = "#6C7B8B";
	ctx.fillRect(0,0,80,80);

	ctx.translate(160,160);
	ctx.fillStyle = "#CDB7B5";
	ctx.fillRect(0,0,80,80);

	ctx.translate(-160,-160);	//restauramos o método translate(x,y) passando como parâmetros os valores do método anteriormente utilizado 
	ctx.fillStyle = "#63B8FF";	//negativando o valor dos parâmetros;
	ctx.fillRect(100,100,80,80); 

4	
	a
    Para isso seria necessário posicionar a origem do contexto no centro 
    da figura desenhada. Poderia ser utilizado o método translate em associação 
    com os parâmetros de coordenadas no método fillRect sendo como: ctx.fillRect(-x/2,-y/2,w,h).
     Assim a origem se tornaria o centro da figura e ao rotacionar, ela rotacionaria sobre si própria.

	b
	var radianos = Math.PI / 180;
	ctx.translate(80, 80);
	ctx.rotate( 45 * radianos);
	ctx.fillRect(-50/2,-50/2,80,80);

5
	a
    devido aos métodos save()/restore(). A chamada ao método scale()
     está posicionada antes do método restore(). Fazendo assim com que as propriedades 
     sejam restauradas antes de desenhar a figura.

	b
    ctx.fillRect(240*2,240*2,160*2,160*2); //como método scale(.5,.5) divide os valores do
    s eixos por 2, basta multiplicarmos os parametros por 2 para ignorar o scale() utilizado.
 */








