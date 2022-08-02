var playerx = document.getElementById("px").value ;
sessionStorage.setItem('playerx', playerx);
var playero = document.getElementById("po").value;
sessionStorage.setItem('playero', playero);

function setPlayers ()
{
    playerx = document.getElementById("px").value ;
    sessionStorage.setItem('playerx', playerx);
    playero = document.getElementById("po").value;
    sessionStorage.setItem('playero', playero);
}
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
    document.getElementById('title').innerHTML="<span id='turn'>"+sessionStorage.getItem("playerx")+"</span>'s turn" ;
    document.getElementById("base-bar").style.visibility ="hidden";
    document.getElementById("theme-bar").style.visibility ="hidden";
    wooden();    
}

function play (my_id)
{
    let player = document.getElementById("turn").textContent;
    let sign ; let res;
    if (player == sessionStorage.getItem("playerx"))
    {
        sign ="X";
    }

    else if (player == sessionStorage.getItem("playero"))
    {
        sign = "O";
    }
    document.getElementById(my_id).textContent=sign;
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
    if(c1 == c2 && c2 == c3 && c2 !=" ") {res = c2;}
    else if(c4 == c5 && c5 == c6 && c5 !=" ") {res = c5;}
    else if(c7 == c8 && c8 == c9 && c8 !=" ") { res = c8; }
    //check the columns
    else if(c1 == c4 && c4 == c7 && c4 !=" ") {res = c4;}
    else if(c2 == c5 && c5 == c8 && c5 !=" ") {res = c5;}
    else if(c3 == c6 && c6 == c9 && c6 !=" ") {res = c6;}
    // check the diagonals
    else if(c1 == c5 && c5 == c9 && c5 !=" ") {res = c5;}
    else if(c3 == c5 && c5 == c7 && c5 !=" ") {res = c5;}

    else if(sign =="X")
    {
        document.getElementById("turn").textContent = sessionStorage.getItem("playero");
    }
    else if(sign =="O")
    {
        document.getElementById("turn").textContent = sessionStorage.getItem("playerx");
    }

    if(res == "X")
    {
        document.getElementById("title").innerHTML="congratulations <br/>"+ sessionStorage.getItem("playerx")+ " won";
    }
    else if (res == "O")
    {
        document.getElementById("title").innerHTML="congratulations <br/>"+ sessionStorage.getItem("playero")+ " won";
    }
}

function goToGame ()
{
    setPlayers ();
    window.location.replace("Game.html") ;
}
