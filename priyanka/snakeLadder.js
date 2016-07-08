$(document).ready(function(){
    $("#dice").hide();
    $("#play").hide();
    $("#diceValue").hide();
    var dice;
    var firstPlayer = 1;
    var secondPlayer = 1;
    var chance = true;
    var firstBySnake = false;
    var secondbySnake = false;
    var count = 0;
    var snake = ["7","31","37","39", "55", "64", "87","98"];
    var ladder = [ "17","43", "61","70"];

    $("#start").click(function(){
        $("#dice").show();
        $("#diceValue").show();
        if (chance) {
            $("#1").addClass("addGreen");
        }else{
            $("#1").addClass("addYellow");
        } 
    });

    $("#dice").click(function(){
        dice = Math.round(Math.random() *5)+1;
        $("#diceValue").text(dice);
        $("#play").show();
    });

    $("#play").click(function(){
        if(chance){
            chance = false;
            $("#" + firstPlayer).removeClass("addGreen");
            firstPlayerMove();
        }else{
            chance = true;
            $("#" + secondPlayer).removeClass("addYellow");
            secondPlayerMove();
        }
    });

    var firstPlayerMove = function(){
        $("#1").removeClass("addGreen"); 
        for (var i = 0; i < snake.length; i++) {
            if (snake[i]==firstPlayer) {
                firstNotMove();
            }else{
                console.log("ha ha ha safe");
            }
        }  
        if (firstBySnake==false) {
            firstPlayer = firstPlayer + dice;
            $("#" + firstPlayer).addClass("addGreen");
        }else{
            firstPlayer = count + dice;
        }  
    }

    var secondPlayerMove = function(){
        $("#1").removeClass("addYellow");
        for (var i = 0; i < snake.length; i++) {
            if (snake[i]==secondPlayer) {
                secondNotMove();
            }else{
                console.log("ha ha ha safe");
            }
        } 
        if (secondbySnake==false) {
        secondPlayer = secondPlayer + dice;
        $("#" + secondPlayer).addClass("addYellow");
        }
    }

    var firstNotMove = function(){
        count = firstPlayer - dice;
    }
    
    var secondNotMove = function(){
        secondPlayer = secondPlayer - dice;
    }
});   