$(document).ready(function(){
    var boxopened="";
    var imgopened="";
    var counter=0;
    var imgfound=0;
    addimage();
    resset();
    count();
    Randomimage();
    start();
   
    function addimage(){
        $("#39").hide();
        $("#1").click(function(){
            $("#39").show();
        });
        $("#40").hide();
        $("#2").click(function(){
            $("#40").show();
        });
        $("#41").hide();
        $("#3").click(function(){
            $("#41").show();
        });
        $("#42").hide();
        $("#4").click(function(){
            $("#42").show();
        });
        $("#43").hide();
        $("#5").click(function(){
            $("#43").show();
        });
        $("#44").hide();
        $("#6").click(function(){
            $("#44").show();
        });
        $("#45").hide();
        $("#7").click(function(){
            $("#45").show();
        });
        $("#46").hide();
        $("#8").click(function(){
            $("#46").show();
        });
        $("#47").hide();
        $("#9").click(function(){
            $("#47").show();
        });
        $("#48").hide();
        $("#10").click(function(){
            $("#48").show();
        });
        $("#49").hide();
        $("#11").click(function(){
            $("#49").show();
        });
        $("#50").hide();
        $("#12").click(function(){
            $("#50").show();
        });
        $("#51").hide();
        $("#13").click(function(){
            $("#51").show();
        });
        $("#52").hide();
        $("#14").click(function(){
            $("#52").show();
        });
        $("#53").hide();
        $("#15").click(function(){
            $("#53").show();
        });
        $("#54").hide();
        $("#16").click(function(){
            $("#54").show();
        });
        $("#55").hide();
        $("#17").click(function(){
            $("#55").show();
        });
        $("#56").hide();
        $("#18").click(function(){
            $("#56").show();
        });
        $("#57").hide();
        $("#19").click(function(){
            $("#57").show();
        });
        $("#58").hide();
        $("#20").click(function(){
            $("#58").show();
        });

        var s;
        var v;
        for (var v= 39;v<=58; v++){
        $("#"+v).hide();
            for (var s=1;s<=20; s++) {
                $("#"+s).click(function(){
                    for (var v=39;v<=58; v++){
                        $("#"+v).show();
                    }
                });
            }
        }
    }

    function Randomimage(){
        x= Math.round(Math.random()*19)+1;
        console.log(x);
    } 

    function resset(){
        $("#reset").click(function(){
            addimage();
        });
    }

    function count(){
        $("#1,#2,#3,#4,#5,#6,#7,#8,#9,#10,#11,#12,#13,#14,#15,#16,#17,#18,#19,#20").click(function(){
            $("#count").html(++counter);
            resset();
        });
    }

    function start(){
        $("#start").click(function(){
            counter = 0;
            $('#count').text(counter);
            addimage();
        });  
    }    
});