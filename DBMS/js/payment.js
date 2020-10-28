var form_input = document.getElementsByClassName("form_entries");
var form_type = document.getElementsByClassName("type");


var curr = 0;

function displayForm(obj){
	console.log("hello")
	var i,j;
	
	for(i=0;i<3;i++){
		if(obj.id == form_type[i].id ){
			j=i;
		}
	}
	for(i=0;i<3;i++){
		form_input[i].style.display="none";
		form_type[i].classList.remove("active");
		form_type[i].setAttribute("style", "background-color:#E8EBEC");
	}

	form_input[j].style.display = "block";
	obj.classList.add("active");
	obj.setAttribute("style", "background-color:#ffffff");

}
