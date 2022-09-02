/*menu desplegable*/ 
let mostrarmenu = document.getElementById("mostrarmenu")
let conteiner = document.getElementById("nav")
let escondermenu = document.getElementById("escondermenu")
let div =document.getElementById('listadoBotones')
/* cookies*/
const cookieContainer = document.getElementById('contenedor-cookies')
let botonAcept = document.getElementById('aceptar-bt')
let botonConfig = document.getElementById('configuracion-bt') 
let ls = localStorage
/*funciones de las cookies*/
function Cookies(){
if(ls.getItem("boton")===null){
   onCookie()
}
}

function aceptarCookies(){
    if(botonAcept.value="aceptar")
    ls.setItem("boton","yes")
    if(ls.getItem("boton")==="yes")
    offCookies()
    console.log(ls)
}

botonAcept.addEventListener('click',aceptarCookies)


function offCookies(){
    cookieContainer.style.display="none"
}

function onCookie(){
    cookieContainer.style.display="flex"
}

botonAcept.addEventListener('click', aceptarCookies)



/*funciones de menu desplegable en version celular*/
function mover(){
    conteiner.style.transform="translateX(100%)"
    div.style.display="none"
};

mostrarmenu.addEventListener('click', mover);


function desaparecer(){
    conteiner.style.transform="translateX(0)"
    
  
    div.style.display="flex"
    
  

   
    


}

escondermenu.addEventListener('click',desaparecer);


