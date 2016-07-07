$(document).ready(function(){
    var a=1;
    $("#dice").hide();
    $("#play").hide();
    $("#diceValue").hide();
    var y;

    $("#start").click(function(){
        $("#1").addClass("addColor");
        $("#dice").show();
        $("#diceValue").show();
    });

    $("#dice").click(function(){
        y = Math.round(Math.random() *5)+1;
        $("#diceValue").text(y);
        $("#play").show();
    });

    $("#play").click(function(){
        move();
    });
    var move = function(){
        console.log("y is:" + y);
        $("#1").removeClass("addColor"); 
        a=a+y;
        console.log(a);
        $("#" + a).removeClass("addColor");
        $("#" + a).addClass("addColor");
    };
});