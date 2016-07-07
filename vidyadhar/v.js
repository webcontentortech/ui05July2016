var v=[["what is the color of blood?","red","blue","A"],["what is the color of mango?","red","yellow","B"],["what is the color of apple?","red","blue","A"],["what is the color of banana?","yellow","blue","A"],["what is the color of orange?","orange","blue","A"],["what is the color of grapes?","yellow","green","B"],["what is the color of cherry?","yellow","red","B"]]

$(document).ready(function(){
    $("#start").click(function() {
       for(i=0;i<=7;i++)
        {
        $("#smallDiv").text(v[i]);
            console.log("hii");
        }
    });

});