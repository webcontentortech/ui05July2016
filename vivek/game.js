

var imgArray = [];

$( document ).ready(function() {
    imgArray[0] = new Image();
    imgArray[0].src = "images/1";
    $('#check').html(imgArray[0]);
    console.log(imgArray[0]);
    imgArray[1] = new Image();
    imgArray[1].src = "images/2";
    imgArray[2] = new Image();
    imgArray[2].src = "images/3";
    console.log(imgArray[2].src);
    imgArray[3] = new Image();
    imgArray[3].src = "images/4";
    imgArray[4] = new Image();
    imgArray[4].src = "images5";
    
    for (var i = 0; i <= 5; i++) {
        var x = imgArray[i].src;
        console.log(x);
        $("#1").animate({marginTop: "466px"},900,"linear");
        console.log(x)
    }

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
    }

    function moveRight(){
        $("#1").animate().stop();
        $("#1").animate({'marginLeft' : "365px"},5000, "linear");
    }

    function moveLeft(){
        $("#1").animate().stop();
        $("#1").animate({'marginLeft' : "-365px"},5000, "linear");
    }

    function movedown(){
        $("#1").animate().stop();
        $("#1").animate({'marginTop' : "466px"},2000, "linear");
    }
});

