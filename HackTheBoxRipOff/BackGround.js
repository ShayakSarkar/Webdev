canvas=document.getElementById("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
context=canvas.getContext('2d');

class Point{
	constructor(){
		this.xpos=Math.random()*canvas.width;
		this.ypos=Math.random()*canvas.height;
		this.xvel=xvel;
		this.yvel=Math.random()*maxYVel - Math.random()*maxYVel;
		this.color='green';
	}
	update(){
		if(this.xpos > canvas.width){
			this.xpos=0;
			this.ypos=canvas.height-this.ypos;
		}
		else if(this.ypos > canvas.height){
			this.ypos=0;
			this.xpos=canvas.width-this.xpos;
		}
		else if(this.ypos<=0){
			this.ypos=canvas.height;
			this.xpos=canvas.width-this.xpos;
		}
		this.xpos+=this.xvel;
		this.ypos+=this.yvel;
	}
}

let noOfPoints = 150;
let xvel=1;
let maxYVel=1;
let radius=3;

points=[]

for(let i=0;i<noOfPoints;i++)
	points.push(new Point());

function animate(){
	context.clearRect(0,0,canvas.width,canvas.height);
	requestAnimationFrame(animate);

	for(let i=0;i<points.length;i++){
		points[i].update();
		context.beginPath();
		context.arc(points[i].xpos,points[i].ypos,radius,0,2*Math.PI,false);
		context.fillStyle = 'red';
		context.fill();
		for(let k=0;k<points.length;k++){
			if(i==k)
				continue;
			let xdist=Math.abs(points[i].xpos-points[k].xpos);
			let ydist=Math.abs(points[i].ypos-points[k].ypos); 
			let dist=Math.sqrt(xdist*xdist + ydist*ydist);
			let alpha=1/(dist)*15;
			if(xdist> 100 || ydist> 100)
				continue;
			context.beginPath();
			context.moveTo(points[i].xpos,points[i].ypos);
			context.lineTo(points[k].xpos,points[k].ypos);
		

			context.strokeStyle="rgba(255,112,23,"+alpha+")";
			context.lineWidth=1;
			context.stroke();

		}

	}
}

animate();

console.log('Hello World')





