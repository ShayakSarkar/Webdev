canvas=document.getElementById("canvas");
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
console.log(canvas);


function generateCircles(){
	let i=0;
	let prevx=0;
	let prevy=0;
	let distance=0;
	let sum=0;
	while(i<100){
		let x=Math.ceil(Math.random()*window.innerWidth);
		let y=Math.ceil(Math.random()*window.innerHeight);
		if(i==0){
			prevx=x;
			prevy=y;
			distance=0;
		}
		else
			distance = Math.sqrt(((x-prevx)*(x-prevx)) + ((y-prevy)*(y-prevy)))
		sum+=distance;
		console.log(distance);
		let radius=5;
		
		//let red=Math.random()*255;
		//let green=Math.random()*255;
		//let blue=Math.random()*255;

		context.strokeWidth="10px";
		
		context.strokeStyle="#ff0000";
		context.lineTo(x,y);
		context.stroke();

		context.arc(x,y,radius,0,360,false);
		context.strokeStyle="#00ff00";
		//context.fillStyle="rgb("+red+","+green+","+blue+")";
		context.fillStyle="rgba(50,255,150,1)";
		context.stroke();
		
		i++;
		console.log(i);
	}
	console.log("avrage distance: "+sum/100);
}
context=canvas.getContext("2d");
generateCircles();
