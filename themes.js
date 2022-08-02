function blackAndCyan()
{
    let cells = document.getElementsByName("cell")
    let size = cells.length;
    for( i=0; i<size;i++)
    {
        cells[i].className="celld"
    }
    let b = document.getElementsByName("board");         b[0].className="boardd"
    document.body.style.backgroundColor = 'black';
    let s = document.getElementById("turn").className="turnd";
    let t = document.getElementById("title").className="turnd"

}

function wooden ()
{
    let cells = document.getElementsByName("cell")
    let size = cells.length;
    for( i=0; i<size;i++)
    {
        cells[i].className="cell"
    }
    let b = document.getElementsByName("board");         b[0].className="board"
    document.body.style.backgroundColor = 'white';
    let s = document.getElementById("turn").className="turn";
    let t = document.getElementById("title").className="turn"

}
