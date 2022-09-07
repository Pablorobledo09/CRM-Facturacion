/* 
//let botones = document.querySelectorAll('.slider.round')
let botones = document.querySelectorAll('.boton')
let span = document.querySelectorAll('.slider.round')
let label = document.querySelectorAll('.switch')
let ls = localStorage



function checkInfo() {
  for(let a=0;a<ls.length;a++){
    ls.getItem("checkInfo"+a)
    if(ls.getItem("checkInfo"+a)==="off")
    span[a].style.backgroundColor=" #ccc"
   
   
  }
    
}


for(let i=0;i<botones.length;i++){
botones[i].addEventListener('click', ()=> { off(botones[i],i) } ) 
}

function off(element,number) {


 if(element.value=="true")
   ls.setItem('checkInfo'+number,'off')
   if(ls.getItem('checkInfo'+number)==="off"){
  
    console.log(element)
   }


    
}
 */



const ls = localStorage;

function toggle(input,slider,id){
  const state = input.value != "true";
  input.value = JSON.stringify(state); 
  ls.setItem(id,input.value);
  input.checked = !state; 
}

function loadStoredValuesOfConfigCookies(input,slider,id){
  const storedState = JSON.parse(ls.getItem(id)||input.value);
  input.value = JSON.stringify(!storedState);
  toggle(input,slider,id);
}

function initializeConfigCookies (){

  const switches = Array.from(document.querySelectorAll('.container-bt'));

  for (const index in  switches){
    const container = switches[index];
    const btn =  container.querySelector('.boton');
    const slider = container.querySelector('.slider.round') ;
    const id = `cookie-switch-id-${index}`; 
    btn.addEventListener('click',()=>toggle(btn, slider,id));

   loadStoredValuesOfConfigCookies(btn,slider,id);

  }

  



}