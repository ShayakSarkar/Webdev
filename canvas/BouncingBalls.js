canvas=document.getElementById("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
context=canvas.getContext('2d');


colorPallette=['#0006bf','#000000','#2b190e','#a457bf','#38024d'];

class Ball{
	constructor(){
		do{
		this.xpos=Math.random()*900;
		this.ypos=Math.random()*900;
		this.dx=Math.random()*1;
		this.dy=Math.random()*1;
		this.radius=10;
		this.borderColor=colorPallette[Math.floor(Math.random()*colorPallette.length)];
	
		this.fillColor=colorPallette[Math.floor(Math.random()*colorPallette.length)];
		}while(this.xpos+this.radius>canvas.width || this.xpos-this.radius < 0 || this.ypos+this.radius > canvas.height || this.ypos-this.radius<0);
	
	}
	update(){
		if(this.xpos+this.radius>=canvas.width || this.xpos-this.radius<=0)
			this.dx=-this.dx;
		if(this.ypos+this.radius>=canvas.height || this.ypos-this.radius<=0)
			this.dy=-this.dy;
		this.xpos+=this.dx;
		this.ypos+=this.dy;
	}
	draw(){
		context.beginPath();
		context.arc(this.xpos,this.ypos,this.radius,0,Math.PI * 2,false);
		context.strokeStyle=this.borderColor;
		context.fillStyle=this.fillColor;
		context.fill();
		context.lineWidth=1;
		context.stroke();
	}
}

class Mouse{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}
}


let mouse=new Mouse();
let balls=[];
let noOfBalls=300;
for(let i=1;i<noOfBalls;i++)
	balls.push(new Ball());

function animate(){
	
	requestAnimationFrame(animate);
	context.clearRect(0,0,canvas.width,canvas.height);	
	
	for(let i=0;i<balls.length;i++){
		balls[i].update();
		balls[i].draw();
	}

}
for(let i=0;i<10;i++)
	console.log(balls[i]);


window.addEventListener('mousemove',(event)=>{
	for(let i=0;i<balls.length;i++){
		if(Math.abs(balls[i].xpos-event.x)<=50 && Math.abs(balls[i].ypos-event.y)<=50 && balls[i].radius<=50)
			balls[i].radius+=2;
		else if(balls[i].radius>=10)	
			balls[i].radius-=2;
		console.log(Math.abs(balls[i].xpos-event.x))
	}
});


window.addEventListener('resize',(event)=>{
	canvas.height=window.innerHeight;
	canvas.width=window.innerWidth;
})
animate();


