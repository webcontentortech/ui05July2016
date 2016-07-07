$(document).ready(function(){
    var clock;

    var solved=[
               [2,7,6,3,1,4,9,5,8],
               [8,5,4,9,6,2,7,1,3],
               [9,1,3,8,7,5,2,6,4],
               [4,6,8,1,2,7,3,9,5],
               [5,9,7,4,3,8,6,2,1],
               [1,3,2,5,9,6,4,8,7],
               [3,2,5,7,8,9,1,4,6],
               [6,4,1,2,5,3,8,7,9],
               [7,8,9,6,4,1,5,3,2],
              ];
    var unsolved=[
                 [2,,,3,,,,,],
                 [8,,4,,6,2,,,3],
                 [,1,3,8,,,2,,],
                 [,,,,2,,3,9,],
                 [5,,7,,,,6,2,1],
                 [,3,2,,,6,,,],
                 [,2,,,,9,1,4,0],
                 [6,,1,2,5,,8,,9],
                 [,,,,,1,,,2],
                ];

   
    $("#01").text(unsolved[0][0]);
    var a=$("#02").val();

    $("#03").val(unsolved[0][2]);
    $("#04").text(unsolved[0][3]);
    $("#05").val(unsolved[0][4]);
    $("#06").val(unsolved[0][5]);
    $("#07").val(unsolved[0][6]);
    $("#08").val(unsolved[0][7]);
    $("#09").val(unsolved[0][8]);

    $("#11").text(unsolved[1][0]);
    $("#12").val(unsolved[1][1]);
    $("#13").text(unsolved[1][2]);
    $("#14").val(unsolved[1][3]);
    $("#15").text(unsolved[1][4]);
    $("#16").text(unsolved[1][5]);
    $("#17").val(unsolved[1][6]);
    $("#18").val(unsolved[1][7]);
    $("#19").text(unsolved[1][8]);

    $("#21").val(unsolved[2][0]);
    $("#22").text(unsolved[2][1]);
    $("#23").text(unsolved[2][2]);
    $("#24").text(unsolved[2][3]);
    $("#25").val(unsolved[2][4]);
    $("#26").val(unsolved[2][5]);
    $("#27").text(unsolved[2][6]);
    $("#28").val(unsolved[2][7]);
    $("#29").val(unsolved[2][8]);

    $("#31").val(unsolved[3][0]);
    $("#32").val(unsolved[3][1]);
    $("#33").val(unsolved[3][2]);
    $("#34").val(unsolved[3][3]);
    $("#35").text(unsolved[3][4]);
    $("#36").val(unsolved[3][5]);
    $("#37").text(unsolved[3][6]);
    $("#38").text(unsolved[3][7]);
    $("#39").val(unsolved[3][8]); 

    $("#41").text(unsolved[4][0]);
    $("#42").val(unsolved[4][1]);
    $("#43").text(unsolved[4][2]);
    $("#44").val(unsolved[4][3]);
    $("#45").val(unsolved[4][4]);
    $("#46").val(unsolved[4][5]);
    $("#47").text(unsolved[4][6]);
    $("#48").text(unsolved[4][7]);
    $("#49").text(unsolved[4][8]);

    $("#51").val(unsolved[5][0]);
    $("#52").text(unsolved[5][1]);
    $("#53").text(unsolved[5][2]);
    $("#54").val(unsolved[5][3]);
    $("#55").val(unsolved[5][4]);
    $("#56").text(unsolved[5][5]);
    $("#57").val(unsolved[5][6]);
    $("#58").val(unsolved[5][7]);
    $("#59").val(unsolved[5][8]); 

    $("#61").val(unsolved[6][0]); 
    $("#62").text(unsolved[6][1]);
    $("#63").val(unsolved[6][2]);
    $("#64").val(unsolved[6][3]);
    $("#65").val(unsolved[6][4]);
    $("#66").text(unsolved[6][5]);
    $("#67").text(unsolved[6][6]);
    $("#68").text(unsolved[6][7]);
    $("#69").val(unsolved[6][8]); 

    $("#71").text(unsolved[7][0]);
    $("#72").val(unsolved[7][1]);
    $("#73").text(unsolved[7][2]);
    $("#74").text(unsolved[7][3]);
    $("#75").text(unsolved[7][4]);
    $("#76").val(unsolved[7][5]);
    $("#77").text(unsolved[7][6]);
    $("#78").val(unsolved[7][7]);
    $("#79").text(unsolved[7][8]);

    $("#81").val(unsolved[8][0]);
    $("#82").val(unsolved[8][1]);
    $("#83").val(unsolved[8][2]);
    $("#84").val(unsolved[8][3]);
    $("#85").val(unsolved[8][4]);
    $("#86").text(unsolved[8][5]);
    $("#87").val(unsolved[8][6]);
    $("#88").val(unsolved[8][7]);
    $("#89").text(unsolved[8][8]);

    $("input").on("input",function () {
        var cell = $(this).val();
        if ((cell.length > 0) && !$.isNumeric(cell)) {
            alert('Please input only numbers from 1 - 9');
            $(this).val("");
            console.log(cell);
        }
    });
    $("#start").click(function(){
        clock=setTimeout( "$('#table').hide();",24000 );
        console.log(clock);
        alert("time out play again");

    });

    $("#pause").click(function(){
        var pause= $("#start").stop();
        console.log(pause);
    });
    function submit() {
        $("#submit").click(function(){
            console.log(a);
            if(unsolved[0][1]==solved[0][1] && unsolved[0][2]==solved[0][2] && unsolved[0][4]==solved[0][4]
                && unsolved[0][5]==solved[0][5] && unsolved[0][6]==solved[0][6] && unsolved[0][7]==solved[0][7]
                && unsolved[1][1]==solved[1][1] && unsolved[1][3]==solved[1][3] && unsolved[1][6]==solved[1][6] 
                && unsolved[1][7]==solved[1][7] && unsolved[2][0]==solved[2][0] && unsolved[2][4]==solved[2][4] 
                && unsolved[2][5]==solved[2][5] && unsolved[2][7]==solved[2][7] && unsolved[2][8]==solved[2][8]
                && unsolved[3][0]==solved[3][0] && unsolved[3][1]==solved[3][1] && unsolved[3][2]==solved[3][2]
                && unsolved[3][3]==solved[3][3] && unsolved[3][5]==solved[3][5] && unsolved[3][8]==solved[3][8]
                && unsolved[4][1]==solved[4][1] && unsolved[4][3]==solved[4][3] && unsolved[4][4]==solved[4][4]
                && unsolved[4][5]==solved[4][5] && unsolved[5][0]==solved[5][0] && unsolved[5][3]==solved[5][3]
                && unsolved[5][4]==solved[5][4] && unsolved[5][6]==solved[5][6] && unsolved[5][7]==solved[5][7]
                && unsolved[5][8]==solved[5][8] && unsolved[6][0]==solved[6][0] && unsolved[6][2]==solved[6][2]
                && unsolved[6][3]==solved[6][3] && unsolved[6][4]==solved[6][4] && unsolved[6][8]==solved[6][8]
                && unsolved[7][1]==solved[7][1] && unsolved[7][5]==solved[7][5] && unsolved[7][7]==solved[7][7]
                && unsolved[8][0]==solved[8][0] && unsolved[8][1]==solved[8][1] && unsolved[8][2]==solved[8][2]
                && unsolved[8][3]==solved[8][3] && unsolved[8][4]==solved[8][4] && unsolved[8][6]==solved[8][6]
                && unsolved[8][7]==solved[8][7]){
            
                alert("u win game");
         
            }else{
                alert("u lost game");
            }
        });
    }
    
});