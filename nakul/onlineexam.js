var questions = [["What is 10 + 4?", "12", "14", "16", "B" ],[ "What is 20 - 9?", "7", "13", "11", "C" ],[ "What is 7 x 3?", "21", "24", "25", "A" ],[ "What is 8 / 2?", "10", "2", "4", "C" ]];

var x = 0;
var test, studentObj, a, b, c, username, password, minute = 10, second = 60, id, option, correctAns = 0;

$("document").ready(function(){
    //$(".maindiv").hide();
});

function showQuestion(){
    //timer();
    test = document.getElementById("mainform");
    document.getElementById("status").innerHTML = "Question "+(x)+" of "+questions.length;
    ques = questions[x][0];
    a = questions[x][1];
    b = questions[x][2];
    c = questions[x][3];
    test.innerHTML = "<div style= 'padding:0px 30px 10px 0px;'>"+ques+"</div>";
    test.innerHTML += "<input type='radio' name='optionA' value='A'>"+a+"<br/>";
    test.innerHTML += "<input type='radio' name='optionA' value='B'>"+b+"<br/>";
    test.innerHTML += "<input type='radio' name='optionA' value='C'>"+c+"<br/>";
    x++;
}

function login(){
    
    //studentObj = _.find(questions, function(studentObj){return studentObj.hallticket == x});
    username = document.getElementById("hallticket").value;
    password = document.getElementById("password").value;
    if (username == "nakul" && password == "123"){
    window.location = "onlineexamhome.html"; 
    return false;
    }
    else{
        alert("try again..")
    }    
}

function timer(){
    if (second > 0) {
        second--;
        document.getElementById("timecheck").innerHTML = minute+":"+second;
        id = setTimeout("timer()", 1000);
    }else{ 
        if(second == 0){
            minute--;
            if(minute == 0){
            //document.getElementById("timecheck").innerHTML = minute+":"+second;
            clearTimeout(id);
            submitExam();
            }else{
                second = 60;
                document.getElementById("timecheck").innerHTML = minute+":"+second;
                id = setTimeout("timer()", 1000);
            }
        }
    }
}

function submitExam(){
    document.getElementById("mainform").innerHTML = "You have successfully submitted your answers.";   
}

function checked(){
    option = document.getElementByName("option");
    for (var i = 0; i < option.length; i++) {
        var opt = option[i];
        if (opt.checked) {
            optn = opt.value;
        } 
    }
    if (optn == questions[x][4]) {
        correctAns++;
    }
    x++;    
}
