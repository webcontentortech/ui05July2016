$(document).ready(function(){
    
	$("input").click(function () {
        var cell = $(this).val();
        if ((cell.length > 0) && !$.isNumeric(cell)) {
            alert('Please input only numbers from 1 - 9');
            $(this).val('');
            console.log(cell);
        }

    });
    
});