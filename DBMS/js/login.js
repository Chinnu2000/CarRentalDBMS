function submit(){
    const name=document.getElementById('username').value;
	sessionStorage.setItem('NAME',name);
	return;
}
