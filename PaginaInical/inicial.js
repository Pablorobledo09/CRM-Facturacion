/*menu desplegable*/ 
let mostrarmenu = document.getElementById("mostrarmenu")
let conteiner = document.getElementById("nav")
let escondermenu = document.getElementById("escondermenu")

function mover(){
    conteiner.style.transform="translateX(100%)"
};

mostrarmenu.addEventListener('click',mover);


function desaparecer(){
    conteiner.style.transform="translateX(0)"

}

escondermenu.addEventListener('click',desaparecer);