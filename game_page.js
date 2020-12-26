player_1_name=localStorage.getItem("player1_name");
player_2_name=localStorage.getItem("player2_name");

player_1_score=0;
player_2_score=0;

question_turn="player_1";
answer_turn="player_2";

document.getElementById("player1_name").innerHTML=player_1_name+" :  ";
document.getElementById("player2_name").innerHTML=player_2_name+" :  ";

document.getElementById("player1_score").innerHTML=player_1_score;
document.getElementById("player2_score").innerHTML=player_2_score;

document.getElementById("player_question").innerHTML="Question Turn - "+player_1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player_2_name;

function send(){
    var word1=document.getElementById("word").value;
    word2=word1.toLowerCase();
    console.log("Word In Lower Case " + word2);

    charAt1=word2.charAt(1);
    console.log(charAt1);
    
    middle=Math.floor(word2.length/2);
    charAt2=word2.charAt(middle);
    console.log(charAt2);

    length_word=word2.length-1;
    charAt3=word2.charAt(length_word);
    console.log(charAt3);

    remove_charAt1=word2.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);

    question_word="<h4 id='word_display'> Q. " +remove_charAt3+"</h4>";
    input_box="<br> answer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_word + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value= "";
}

function check(){
    game_answer=document.getElementById("input_check_box").value;
    game_lowercase=game_answer.toLowerCase();
    console.log(game_lowercase);

    if (game_answer==word2){
     if (answer_turn=="player_1"){
         player_1_score=player_1_score+1;
         document.getElementById("player1_score").innerHTML=player_1_score;
     }
     else{
     player_2_score=player_2_score+1;
     document.getElementById("player1_score").innerHTML=player_2_score;
     }
    }
    if (question_turn=="player_1"){
        question_turn="player_2";
        document.getElementById("player_question").innerHTML="Question Turn - "+player_1_name;
    }
    else{
        question_turn="player_1";
        document.getElementById("player_question").innerHTML="Question Turn - "+player_2_name;
    }

    if (answer_turn=="player_1"){
        answer_turn="player_2";
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player_1_name;
    }
    else{
        answer_turn="player_1";
        document.getElementById("player_answer").innerHTML="Answer  Turn- "+player_2_name;
    }
 document.getElementById("output").innerHTML="";
}