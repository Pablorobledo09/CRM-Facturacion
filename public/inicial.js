/*menu desplegable*/ 
let mostrarmenu = document.getElementById("mostrarmenu")
let conteiner = document.getElementById("nav")
let escondermenu = document.getElementById("escondermenu")
let div =document.getElementById('listadoBotones')

function mover(){
    conteiner.style.transform="translateX(100%)"
    div.style.display="none"
};

mostrarmenu.addEventListener('click',mover);


function desaparecer(){
    conteiner.style.transform="translateX(0)"


}

escondermenu.addEventListener('click',desaparecer);

console.log(__dirname)