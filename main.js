
function nextPage(){
    window.location="#Login2";
}

function nextPage2(){
    player_name1= document.getElementById("player1_input").value;
    player_name2= document.getElementById("player2_input").value;

    localStorage.setItem("player1_name", player_name1);
    localStorage.setItem("player1_name", player_name2);
    window.location="quiz_game_page.html";
}

