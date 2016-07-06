$( document ).ready(function() {


 $("#b").animate({marginTop: "487px"},9000,"linear");

           document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
var keyCode = e.keyCode;
  if(keyCode==37) {
  	
  	$("#b").animate({marginLeft:"100px"},9000,"linear");
  }
  console.log("d");
  	if(keyCode==38) {
  		
  	$("#b").animate({marginRight:"100px"},9000,"linear");
  }
  	if(keyCode==39) {
  	
  	$("#b").animate({marginUp:"100px"},9000,"linear");
  }
  	if(keyCode==40) {
  		
  	$("#b").animate({marginDown:"100px"},9000,"linear");
  }
  

}



});