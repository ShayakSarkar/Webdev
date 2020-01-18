let canvas=document.getElementById("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let context=canvas.getContext('2d');

//Control variables: 

//-------Orbital Control------
let omega=0.07;
let time=1;
let initDist=50;
let initRadOrb=300;
let newDist=60;
let xoff=400;
let yoff=300;

//-------Size Control---------
let initRadiusSphere=30;

function animate(){
	console.log(Math.sin(omega*time));
	context.clearRect(0,0,innerWidth,innerHeight);
	requestAnimationFrame(animate);
	context.beginPath();
	xpos=xoff+(initRadOrb*1.0)*((initDist*1.0)/newDist)*Math.sin(omega*time);
	dist=Math.sqrt(newDist*newDist + initRadiusSphere*initRadiusSphere - 2*initRadiusSphere*newDist*Math.cos(omega*time));
	newRad = initRadiusSphere*initDist/(dist*1.0);

	ypos=yoff;
	context.arc(xpos,ypos,newRad,0,Math.PI*2,false);
	context.strokeStyle="#87ceeb";
	context.fillStyle="#87ceeb";
	context.fill();
	context.stroke();
	time++;
}
animate();
