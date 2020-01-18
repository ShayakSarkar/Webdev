function submit()
{
	let uname=document.getElementById("username").value;
	let pass=document.getElementById("password").value;
	let win=window.open("usernameAndPasswordViewer.html");
	win.document.write("Username: "+uname+" Password: "+pass);
}

