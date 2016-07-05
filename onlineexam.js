var questions = [[ "What is 10 + 4?", "12", "14", "16", "B" ],[ "What is 20 - 9?", "7", "13", "11", "C" ],[ "What is 7 x 3?", "21", "24", "25", "A" ],[ "What is 8 / 2?", "10", "2", "4", "C" ]];

var x = 0;
var test;

$("document").ready(function(){
	$(".maindiv").hide();

	function showQuestion(){
	test = document.getElementById("leftspan");
	document.getElementById("status").innerHTML = "Question "+(x+1)+" of "+questions.length;
	ques = questions[x][0];
	test.innerHTML = "<h2>"+ques+"</h2>";

}


});

