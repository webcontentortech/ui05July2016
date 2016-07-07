var array=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16",
"17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];

var months=["January", "February","March","April","May","June","July","August","September","October","November","December"];

$(document).ready(function(){
	date();
	cal();	
});

function date(){
	for (var i =0; i <=31; i++) {
	var date= array[i];
	var x = i+1;
	document.getElementById(x).innerHTML=date;
	}
}

function cal(){
	for (var i = 0; i<months.length; i++) {
	var year= months[i];
	document.getElementById("month").innerHTML=year;
	}

}
console.log(year);

	/*var date = array[0];
	document.getElementById("one").innerHTML = date; 
	var date = array[1];
	document.getElementById("two").innerHTML = date;
	var date = array[2];
	document.getElementById("three").innerHTML = date;
	var date = array[3];
	document.getElementById("four").innerHTML = date;
	var date = array[4];
	document.getElementById("five").innerHTML = date;
	var date = array[5];
	document.getElementById("six").innerHTML = date;
	var date = array[6];
	document.getElementById("seven").innerHTML = date;
	var date = array[7];
	document.getElementById("eight").innerHTML = date;
	var date = array[8];
	document.getElementById("nine").innerHTML = date;
	var date = array[9];
	document.getElementById("ten").innerHTML = date;
	var date = array[10];
	document.getElementById("eleven").innerHTML = date;
	var date = array[11];
	document.getElementById("twelve").innerHTML = date;
	var date = array[12];
	document.getElementById("thirteen").innerHTML = date;
	var date = array[13];
	document.getElementById("fourteen").innerHTML = date;
	var date = array[14];
	document.getElementById("fifteen").innerHTML = date;
	var date = array[15];
	document.getElementById("sixteen").innerHTML = date;
	var date = array[16];
	document.getElementById("seventeen").innerHTML = date;
	var date = array[17];
	document.getElementById("eighteen").innerHTML = date;
	var date = array[18];
	document.getElementById("nineteen").innerHTML = date;
	var date = array[19];
	document.getElementById("twenty").innerHTML = date;
	var date = array[20];
	document.getElementById("twentyone").innerHTML = date;
	var date = array[21];
	document.getElementById("twentytwo").innerHTML = date;
	var date = array[22];
	document.getElementById("twentythree").innerHTML = date;
	var date = array[23];
	document.getElementById("twentyfour").innerHTML = date;
	var date = array[24];
	document.getElementById("twentyfive").innerHTML = date;
	var date = array[25];
	document.getElementById("twentysix").innerHTML = date;
	var date = array[26];
	document.getElementById("twentyseven").innerHTML = date;
	var date = array[27];
	document.getElementById("twentyeight").innerHTML = date;
	var date = array[28];
	document.getElementById("twentynine").innerHTML = date;
	var date = array[29];
	document.getElementById("thirty").innerHTML = date;
	var date = array[30];
	document.getElementById("thirtyone").innerHTML = date;
	
	*/
