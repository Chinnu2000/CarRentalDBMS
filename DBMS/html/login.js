function submit(){
	var text =  document.getElementById("username").value;

	
	sessionStorage.setItem("NAME", text);
}
