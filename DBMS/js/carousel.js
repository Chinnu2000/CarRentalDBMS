var currentSlide = 0;
var temp,temp1;
var slide = document.getElementsByClassName("slides");
var num = slide.length;
var dots = document.getElementsByClassName("dot");


function plusSlides(n){
  if(n==1 && currentSlide!=2 ){
    document.getElementById(currentSlide).style.display ="none";
    currentSlide+=1;
    document.getElementById(currentSlide).style.display ="block";
   
  }else if(n==-1 && currentSlide!=0){
    document.getElementById(currentSlide).style.display ="none";
    
    currentSlide-=1;
    document.getElementById(currentSlide).style.display ="block";
    
  }else if(n==1 && currentSlide == 2){
    document.getElementById(currentSlide).style.display ="none";
    
    currentSlide = 0;
    document.getElementById(currentSlide).style.display ="block";
    
  }else if(n==-1 && currentSlide == 0){
    document.getElementById(currentSlide).style.display ="none";
    
    currentSlide = 2;
    document.getElementById(currentSlide).style.display ="block";
    
  }
 
}



