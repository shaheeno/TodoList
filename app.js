const home=document.querySelector('#home');
  const list=document.querySelector('#ulid');
  const tableList=document.querySelector('#tableList');

addevent()

function addevent(){
home.addEventListener('click',showDropdown);
tableList.addEventListener('click',tableLink)


}
let c=false;
function showDropdown(){
 c=!c;
  if(c){
    list.style.display='block'  
    console.log(c)
  }

  else{
    list.style.display='none'
    console.log(c)
  }    
}
function tableLink(){
  const atag=document.querySelector('.aTag')
  atag.setAttribute('href','./table.html')
}
