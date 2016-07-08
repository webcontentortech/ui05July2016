$(document).ready(function(){
    var clock;
    submit();
    var solved =[
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
    
    $("#01").text(solved[0][0]);
    $("#04").text(solved[0][3]);
    $("#11").text(solved[1][0]);
    $("#13").text(solved[1][2]);
    $("#15").text(solved[1][4]);
    $("#16").text(solved[1][5]);
    $("#19").text(solved[1][8]);
    $("#22").text(solved[2][1]);
    $("#23").text(solved[2][2]);
    $("#24").text(solved[2][3]);
    $("#27").text(solved[2][6]);
    $("#35").text(solved[3][4]);
    $("#37").text(solved[3][6]);
    $("#38").text(solved[3][7]);
    $("#41").text(solved[4][0]);
    $("#43").text(solved[4][2]);
    $("#47").text(solved[4][6]);
    $("#48").text(solved[4][7]);
    $("#49").text(solved[4][8]);
    $("#52").text(solved[5][1]);
    $("#53").text(solved[5][2]);
    $("#56").text(solved[5][5]);
    $("#62").text(solved[6][1]);
    $("#66").text(solved[6][5]);
    $("#67").text(solved[6][6]);
    $("#68").text(solved[6][7]);
    $("#71").text(solved[7][0]);
    $("#73").text(solved[7][2]);
    $("#74").text(solved[7][3]);
    $("#75").text(solved[7][4]);
    $("#77").text(solved[7][6]);
    $("#79").text(solved[7][8]);
    $("#86").text(solved[8][5]);
    $("#89").text(solved[8][8]);

    $("input").on("input",function () {
        var cell = $(this).val();
        if ((cell.length > 0) && !$.isNumeric(cell)) {
            alert('Please input only numbers from 1 - 9');
            $(this).val("");
        }
    });

    $("#start").click(function(){
        clock=setTimeout( "$('#table').hide();",240000 );
        console.log(clock);
        alert("time out play again");
    });

    $("#pause").click(function(){
        var pause= $("#start").stop();
        console.log(pause);
    });

    function submit() {
        $("#submit").click(function(){
            var t1=$("#02").val();
            var t2=$("#03").val();
            var t3=$("#05").val();
            var t4=$("#06").val();
            var t5=$("#07").val();
            var t6=$("#08").val();
            var t7=$("#09").val();
            var t8=$("#12").val();
            var t9=$("#14").val();
            var t10=$("#17").val();
            var t11=$("#18").val();
            var t12=$("#21").val();
            var t13=$("#25").val();
            var t14=$("#26").val();
            var t15=$("#28").val();
            var t16=$("#29").val();
            var t17=$("#31").val();
            var t18=$("#32").val();
            var t19=$("#33").val();
            var t20=$("#34").val();
            var t21=$("#36").val();
            var t22=$("#39").val();
            var t23=$("#42").val(); 
            var t24=$("#44").val();
            var t25=$("#45").val();
            var t26=$("#46").val();
            var t27=$("#51").val();
            var t28=$("#54").val();
            var t29=$("#55").val();
            var t30=$("#57").val();
            var t31=$("#58").val();
            var t32=$("#59").val();
            var t33=$("#61").val(); 
            var t34=$("#63").val();
            var t35=$("#64").val();
            var t36=$("#65").val();
            var t37=$("#69").val(); 
            var t38=$("#72").val();
            var t39=$("#76").val();
            var t40=$("#78").val();
            var t41=$("#81").val();
            var t42=$("#82").val();
            var t43=$("#83").val();
            var t44=$("#84").val();
            var t45=$("#85").val();
            var t46=$("#87").val();
            var t47=$("#88").val();

            if(solved[0][1]==t1 && solved[0][2]==t2 && solved[0][4]==t3 && solved[0][5]==t4 &&
               solved[0][6]==t5 && solved[0][8]==t6 && solved[0][7]==t7 && solved[1][1]==t8 && 
               solved[1][3]==t9 && solved[1][6]==t10 && solved[1][7]==t11 && solved[2][0]==t12 
               && solved[2][4]==t13 && solved[2][5]==t14 && solved[2][7]==t15 && solved[2][8]==t16
               && solved[3][0]==t17 && solved[3][1]==t18 && solved[3][2]==t19 && solved[3][3]==t20
               && solved[3][5]==t21 && solved[3][8]==t22 && solved[4][1]==t23 && solved[4][3]==t24 
               && solved[4][4]==t25 && solved[4][5]==t26 && solved[5][0]==t27 && solved[5][3]==t28
               && solved[5][4]==t29 && solved[5][6]==t30 && solved[5][7]==t31 && solved[5][8]==t32
               && solved[6][0]==t33 && solved[6][2]==t34 && solved[6][3]==t35 && solved[6][4]==t36
               && solved[6][8]==t37 && solved[7][1]==t38 && solved[7][5]==t39 && solved[7][7]==t40 
               && solved[8][0]==t41 && solved[8][1]==t42 && solved[8][2]==t43 && solved[8][3]==t44 
               && solved[8][4]==t45 && solved[8][6]==t46 && solved[8][7]==t47){
               alert("u win game");
            }else{
               alert("u lost game");
            }                                                                                      
        });
    }
});