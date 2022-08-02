function reset ()
{
    let c1 = document.getElementById("1").textContent= " ";
    let c2 = document.getElementById("2").textContent= " ";
    let c3 = document.getElementById("3").textContent= " ";
    let c4 = document.getElementById("4").textContent= " ";
    let c5 = document.getElementById("5").textContent= " ";
    let c6 = document.getElementById("6").textContent= " ";
    let c7 = document.getElementById("7").textContent= " ";
    let c8 = document.getElementById("8").textContent= " ";
    let c9 = document.getElementById("9").textContent= " ";
    document.getElementById('title').innerHTML="<span id='turn'>X</span>'s turn" ;
    document.getElementById("base-bar").style.visibility ="hidden";
    document.getElementById("theme-bar").style.visibility ="hidden";
    wooden();
}

function play (my_id)
{
    let player = document.getElementById("turn").textContent;
    document.getElementById(my_id).textContent=player;
    let c1 = document.getElementById("1").textContent;
    let c2 = document.getElementById("2").textContent;
    let c3 = document.getElementById("3").textContent;
    let c4 = document.getElementById("4").textContent;
    let c5 = document.getElementById("5").textContent;
    let c6 = document.getElementById("6").textContent;
    let c7 = document.getElementById("7").textContent;
    let c8 = document.getElementById("8").textContent;
    let c9 = document.getElementById("9").textContent;

    // check the rows 
    if(c1 == c2 && c2 == c3 && c2 !=" ") {document.getElementById("title").textContent= "player " + c2 + " is the winner" ;}
    else if(c4 == c5 && c5 == c6 && c5 !=" ") {document.getElementById("title").textContent= "player " + c5 + " is the winner" ;}
    else if(c7 == c8 && c8 == c9 && c8 !=" ") {document.getElementById("title").textContent= "player " + c8 + " is the winner" ;}
    //check the columns
    else if(c1 == c4 && c4 == c7 && c4 !=" ") {document.getElementById("title").textContent= "player " + c4 + " is the winner" ;}
    else if(c2 == c5 && c5 == c8 && c5 !=" ") {document.getElementById("title").textContent= "player " + c5 + " is the winner" ;}
    else if(c3 == c6 && c6 == c9 && c6 !=" ") {document.getElementById("title").textContent= "player " + c6 + " is the winner" ;}
    // check the diagonals
    else if(c1 == c5 && c5 == c9 && c5 !=" ") {document.getElementById("title").textContent= "player " + c5 + " is the winner" ;}
    else if(c3 == c5 && c5 == c7 && c5 !=" ") {document.getElementById("title").textContent= "player " + c5 + " is the winner" ;}
    
    else if(player =="X")
    {
        document.getElementById("turn").textContent = "O";
    }
    else if(player =="O")
    {
        document.getElementById("turn").textContent = "X";
    }
}

