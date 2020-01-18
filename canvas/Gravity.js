let canvas=document.getElementById('canvas');
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
let context=canvas.getContext('2d');

console.log('Hello World')
let gravity=0.8;
let energyLoss=0.9;
class Ball{
	constructor(xpos,ypos,radius,xvel,yvel){
		this.xpos=xpos;
		this.ypos=ypos;
		this.radius=radius;
		this.yvel=yvel;
		this.xvel=xvel;
	
	}
	updateBall(){
		this.ypos+=this.yvel;
		this.yvel+=gravity;
		if(this.xpos+this.xvel>=canvas.width || this.xpos-this.xvel<=0)
			this.xvel=-this.xvel;
		else
			this.xpos+=this.xvel;
	}
}
function animateBall(){
	console.log(ball.yvel);
	context.clearRect(0,0,canvas.width,canvas.height);
	requestAnimationFrame(animateBall);
	ball.updateBall();
	if(ball.ypos+ball.radius+ball.yvel>=500 && ball.yvel>0)
		ball.yvel=-ball.yvel*energyLoss;
	//else if(ball.ypos+ball.radius>=500)
	//	ball.vel=0;
	context.beginPath();
	context.arc(ball.xpos,ball.ypos,ball.radius,0,Math.PI*2,false)
	context.fillStyle='red';
	context.fill();
	context.stroke();
	drawPlane();
}
function drawPlane(){
	context.beginPath();
	context.moveTo(0,500);
	context.lineTo(canvas.width,500);
	context.strokeStyle='black'
	context.stroke();

}

let ball=new Ball(200,100,30,15,25,0);
ball.updateBall();
console.log('Echo1');
animateBall(ball);

