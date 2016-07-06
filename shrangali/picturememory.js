$(document).ready(function(){
    

    var boxopened="";
    var imgopened="";
    var counter=0;
    var imgfound=0;
    addimage();
    reset();
    
    

    function addimage(){
        $("#image1").hide();
        $("#1").click(function(){
        $("#image1").show();
        });
       
        $("#image2").hide();
        $("#2").click(function(){
        $("#image2").show();
        });
        
        $("#image3").hide();
        $("#3").click(function(){
        $("#image3").show();
        });

        $("#image4").hide();
        $("#4").click(function(){
        $("#image4").show();
        });

        $("#image5").hide();
        $("#5").click(function(){
        $("#image5").show();
        });

        $("#image6").hide();
        $("#6").click(function(){
        $("#image6").show();
        });

        $("#image7").hide();
        $("#7").click(function(){
        $("#image7").show();
        });

        $("#image8").hide();
        $("#8").click(function(){
        $("#image8").show();
        });

        $("#image9").hide();
        $("#9").click(function(){
        $("#image9").show();
        });
        $("#image10").hide();
        $("#10").click(function(){
        $("#image10").show();
        });
        $("#image11").hide();
        $("#11").click(function(){
        $("#image11").show();
        });
        $("#image12").hide();
        $("#12").click(function(){
        $("#image12").show();
        });
        $("#image13").hide();
        $("#13").click(function(){
        $("#image13").show();
        });
        $("#image14").hide();
        $("#14").click(function(){
        $("#image14").show();
        });
        $("#image15").hide();
        $("#15").click(function(){
        $("#image15").show();
        });
        $("#image16").hide();
        $("#16").click(function(){
        $("#image16").show();
        });
        $("#image17").hide();
        $("#17").click(function(){
        $("#image17").show();
        });
        $("#image18").hide();
        $("#18").click(function(){
        $("#image18").show();
        });
        $("#image19").hide();
        $("#19").click(function(){
        $("#image19").show();
        });
        $("#image20").hide();
        $("#20").click(function(){
        $("#image20").show();
        
        });
    }

    function Randomimage(){
        console.log("kiii");
        return Math.round(Math.random()*19)+1;
        
    }

   
    function reset(){
        $("#reset").click(function(){
            addimage();
        });
    }

    /*function imagematch(){
        console.log("hiii");
        
        $("#1").click(function(){
        if((/home/admin/webcontentor/ui05July2016/shrangali/images/boll.jpeg)==(/home/admin/webcontentor/ui05July2016/shrangali/images/boll.jpeg)){
    
            $(this).remove();
        }*/
    
        
     
    

});