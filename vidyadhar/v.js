var v=["what is the color of blood?","what is the color of mangoes?","what is the color of apple?","what is the color of banana?","what is the color of orange?","what is the color of grapes?","what is the color of cherry?"]

var s=["red",["blue"],["yellow"],["red"],["red"],["blue"],["yellow"],["blue"],["orange"],["green"],["green"],["red"],["red"],["green"]]
var i=0;
var j=150;
var k=0
var aValue;

$(document).ready(function(){
    $("#start").click(function() {
        $("#questionDiv").text(v[i]);
        $("#answer1Div").text(s[i*2]);
        $("#answer2Div").text(s[(i*2)+1]);
        aValue= $("#answer1Div").text();
        console.log(aValue);
        i++;       
    });
    $("#a").click(function(){
        if (true) {}
        moveDown();        
    });

    $("#b").click(function () {
        alert("your answer is incorrect");
    });     

});
function moveLeft(){
    $("#10").animate().stop();
    $("#10").animate({'marginLeft' : "600px"});
}
function moveDown(){
    $("#10").animate().stop();
    $("#10").animate({'marginTop' : "+"+j+"px" },0);
    j=j+180;
}
function moveUp(){
    $("#10").animate().stop();
     $("#10").animate({'marginTop' : "+150px" });
}
                            
                           


            
    
               
              
                           
                            



                        
                           


                        
                            
                            
                            
                        
                     
                   
            



