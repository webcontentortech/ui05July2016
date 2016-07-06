$( document ).ready(function() {



$(".b").animate({marginTop: "487px"},9000,"linear");
document.onkeydown = function(e) {
switch (e.keyCode) {
case 37:
moveLeft();
break;
case 38:
moveup();
break;
case 39:
moveRight();
break;
case 40:
movedown();
break;
}
};
function moveRight(){
$(".b").animate().stop();
$(".b").animate({'marginLeft' : "385px"},5000, "linear"
)};
function moveLeft(){
$(".b").animate().stop();
$(".b").animate({'marginLeft' : "-385px"},5000, "linear"
// body...
)};
function movedown(){
$(".b").animate().stop();
$(".b").animate({'marginTop' : "485px"},2000, "linear"
// body...
)};



});