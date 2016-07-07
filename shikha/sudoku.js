$(document).ready(function(){
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
                         [2,0,0,3,0,0,0,0,0],
                         [8,0,4,0,6,2,0,0,3],
                         [0,1,3,8,0,0,2,0,0],
                         [0,0,0,0,2,0,3,9,0],
                         [5,0,7,0,0,0,6,2,1],
                         [0,3,2,0,0,6,0,0,0],
                         [0,2,0,0,0,9,1,4,0],
                         [6,0,1,2,5,0,8,0,9],
                         [0,0,0,0,0,1,0,0,2],
                        ];

   //console.log(unsolved[0][0]);
  $("#01").text(unsolved[0][0]);
  $("#02").val(unsolved[0][1]);
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
            $(this).val('');
            console.log(cell);
        }
      
      

});
     
    
  

    
});