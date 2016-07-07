$(document).ready(function(){
    $("#dice").hide();
    $("#play").hide();
    $("#diceValue").hide();
    var dice;
    var firstPlayer = 1;
    var secondPlayer = 1;
    var chance = true;
    var snake = ["7","31","37","39", "55", "64", "87","98"];
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
                console.log("snake bites me");
                firstNotMove();
            }else{
                console.log("ha ha ha safe");
            }
        }
            firstPlayer = firstPlayer + dice;
            console.log("in move method:"+firstPlayer);
            $("#" + firstPlayer).addClass("addGreen");
    }

    var secondPlayerMove = function(){
        $("#1").removeClass("addYellow");
        for (var i = 0; i < snake.length; i++) {
            if (snake[i]==secondPlayer) {
                console.log("snake bites me");
                secondNotMove();
            }else{
                console.log("ha ha ha safe");
            }
        } 
        secondPlayer = secondPlayer + dice;
        $("#" + secondPlayer).addClass("addYellow");
    }

    var firstNotMove = function(){
        //console.log("in not move method:"+firstPlayer);
        firstPlayer = firstPlayer - dice;
       // console.log("after minus:" + firstPlayer);
    }
    
    var secondNotMove = function(){
        secondPlayer = secondPlayer - dice;
    }
});   