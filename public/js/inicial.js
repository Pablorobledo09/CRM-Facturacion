

/*menu desplegable*/ 

const div =document.getElementById('listadoBotones')
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


fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
.then(response=>response.json())
.then(dataPoints=>{
const divCompra = document.getElementById('compra')
const divVenta = document.getElementById('venta')
const valorVenta = document.getElementById('valorVenta')
const valorCompra = document.getElementById('valorCompra')
const primera = dataPoints.map(B=>{return B.casa})
const nombresDelosDolares = primera.map(B=>{return B.nombre})
const precioDeldolarVenta= primera.map(B=>{return B.venta})
const precioDeldolarCompra= primera.map(D=>{return D.compra})

//Nombres de los dolares
for(let i=0;i<primera.length;i++){

const creacionParrafoC =document.createElement('option')
creacionParrafoC.textContent= nombresDelosDolares[i]
divCompra.appendChild(creacionParrafoC)
creacionParrafoC.classList.add('valorDeCompra')
}
for( let i=0;i<primera.length;i++){
    const ParrafoV =document.createElement('option')
ParrafoV.textContent= nombresDelosDolares[i]
divVenta.appendChild(ParrafoV)
ParrafoV.classList.add('valorDeVenta')
}

//selectores de los dolares
divCompra.addEventListener('change',(event)=>{
 valorCompra.textContent= precioDeldolarCompra[event.target.selectedIndex]
 
    
    } )


divVenta.addEventListener('change',(event)=>{
valorVenta.textContent= precioDeldolarVenta[event.target.selectedIndex]

           
           } )
       


})


