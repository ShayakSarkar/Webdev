canvas=document.getElementById("canvas");
canvas.height=window.outerHeight;
canvas.width=window.outerWidth;

context=canvas.getContext('2d');

console.log('Hello World')
let grid,gridx,gridy;
let TEXT_SIZE=14;
let XMIN=4
let YMIN=0
let CURSOR_COUNTER=3;
let CURSOR='|'
let positions=[];	//stores the positions of the downward moving lines
let lineLengths=[];	//Stores the length of the lines
let alpha=[];
let cursorCtr=CURSOR_COUNTER;
let text="";
let cursorPosition=535;
let commandControl=0;
document.addEventListener('keydown',(event)=>{
	if(event.code == 'Backspace')
		text=text.slice(0,-1);
	if(event.code == 'Enter'){
		text='';
		commandControl=1;
	}
});
document.addEventListener('keypress',(event)=>{
	if(event.charCode == 13){
		text='';
		return;
	}
	else
		commandControl=0;
	text+=String.fromCharCode(event.charCode);
	console.log(text);
});




function setup()
{
	gridx = Math.floor(canvas.width/TEXT_SIZE);
	gridy = Math.floor(canvas.height/TEXT_SIZE);
	function setLinePositions()
	{
		for(let i=0;i<gridx;i++)
			positions.push(Math.floor(Math.random()*gridy)-gridy)
	}
	function setLineLengths()
	{
		for(let i=0;i<gridx;i++)
			lineLengths.push(Math.floor(Math.random()*(2*gridy/3)+gridy/3))
	}
	function setAlpha()
	{
		for(let i=0;i<gridx;i++)
			alpha.push((Math.random()*8+2)/10);
	}

	console.log(gridx,gridy)
	setLinePositions();	//sets the starting positions of the lines
	setLineLengths();
	setAlpha();
	console.log(positions);
	console.log(lineLengths);
}

function generateChar()
{
	return (String.fromCharCode(Math.floor(Math.random()*255)))
}
function displayChar(posx,posy,alpha)
{
	let ch=generateChar();
	//console.log(ch);
	context.font = TEXT_SIZE+"px ubuntu";
	context.fillStyle="rgba(0,255,0,"+alpha+")";
	//context.fillStyle="rgba(0,255,0,1)";
	console.log(alpha);
	context.fillText(ch,posx,posy);
}
function animate()
{
	context.clearRect(0,0,canvas.width,canvas.height);
	updateLines();
	setTimeout(()=>{requestAnimationFrame(animate)},20)
	cursorCtr--;
	if(cursorCtr == 0 && CURSOR == "|")
	{	CURSOR=' ';
		cursorCtr=CURSOR_COUNTER;
	}
	else if(cursorCtr == 0 && CURSOR == " ")
	{	CURSOR='|';
		cursorCtr=CURSOR_COUNTER;
	}
	context.fillStyle = "white"; 
	context.fillText(text,535,291);
	cursorPosition=6.7*text.length+20+520;
	context.fillText(CURSOR,cursorPosition,291);
	if(commandControl == 1)
		context.fillText('P r o c e s s i n g  . . .',380,325 )
}
function updateLines()
{
	for(let i=0;i<gridx;i++)
	{
		if(positions[i]>gridy)
		{
			lineLengths[i]=Math.floor(Math.random()*gridy*(2/3)+gridy/3)
			positions[i]=-lineLengths[i];
		}
		positions[i]=positions[i]+1;
		for(let j=0;j<lineLengths[i];j++)
		{
			if(positions[i]+j>gridy || positions[i]+j<YMIN)
				continue;
			if(positions[i]+j>10 && positions[i]+j<30 && i>20 && i<65)
				displayChar(XMIN+i*TEXT_SIZE,(YMIN+positions[i]+j)*TEXT_SIZE,0.1);

			else
				displayChar(XMIN+i*TEXT_SIZE,YMIN+(positions[i]+j)*TEXT_SIZE,alpha[i]);
		}
	}
}
setup();
animate();





