canvas=document.getElementById("canvas");
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
context=canvas.getContext('2d');

positions=[];
for(let i=0;i<canvas.width;i+=0.25)
	positions.push(i);

let time=3;
let omega=1;
let lambda=100;
let amplitude=50;
let vel=10;

vel*=1.0;

function update(){
	for(let i=0;i<positions.length;i++)
		positions[i]=amplitude * Math.sin(Math.PI*2*(i-vel*time)/lambda);
}

function animate(){
	time++;
	update();
	context.clearRect(0,0,canvas.width,canvas.height);
	requestAnimationFrame(animate);
	
	for(let x=0;x<positions.length;x++){
		context.beginPath();
		context.arc(x,200+positions[x],0.9,0,Math.PI*2,false);
		context.strokeStyle='blue';
		context.fillStyle='red';
		context.fill;
		context.stroke();
	}
}
animate();





