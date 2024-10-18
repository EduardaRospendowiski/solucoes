function SairM(){
    document.getElementById("Menu-Lateral").style.marginLeft = "100%";
    document.getElementById("Menu-Lateral").style.width = 0;
    document.getElementById("Pagina").style.filter = "blur(0)";
}

function ShowMe(){
    document.getElementById("Menu-Lateral").style.marginLeft = 0;
    document.getElementById("Menu-Lateral").style.width = "100%";
    document.getElementById("Pagina").style.filter = "blur(5px)";
}