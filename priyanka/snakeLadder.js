$(document).ready(function(){
	var z;
	getValue();
	$("#start").click(function(){
		$("#1").addClass("addColor");
	});
	$("#dice").click(function(){
		var y = Math.round(Math.random() *5)+1;
		$("#diceValue").text(y);
	});
	function getValue(){
		 
			var x = ("#diceValue").val();
			
			console.log("z is:" + z);
	
		//console.log("z is:" + z);
		return ;
		
	}
	//console.log(y)
	
});