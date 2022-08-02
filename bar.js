function showBar ()
{
    var x = document.getElementById("base-bar");
    if (x.style.visibility=== "hidden") 
    {
        x.style.visibility = "visible";
    } 
    else
    {
        x.style.visibility = "hidden";
        document.getElementById("theme-bar").style.visibility="hidden";
    }
    
}

function showthemeBar ()
{
    var x = document.getElementById("theme-bar");
    if (x.style.visibility === "hidden") 
    {
        x.style.visibility = "visible";
    } 
    else
    {
        x.style.visibility = "hidden";
    }
    
}

function about ()
{
    window.location.href= "about.html";
}

function exit()
{
    sessionStorage.clear();
    window.location.replace("index.html");
}