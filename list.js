const form=document.querySelector('#form');
const input=document.querySelector('#inp');
const filter=document.querySelector('#inp1');
const collection=document.querySelector('.collectionDisplay');
const butx=document.querySelector('#buttin');


loadAllEventListners()

function loadAllEventListners(){
    document.addEventListener('DOMContentLoaded',datareachFromLS);
    form.addEventListener('submit',addtask);
    collection.addEventListener('click',removeTask);
    filter.addEventListener('keyup',filterTask);
    butx.addEventListener('click',vv)
}
 let forward=true;
// function vv(){
//     const a=document.querySelector('.asg');
//     a.setAttribute('href','./index.html')
//     const bb=document.querySelector('#buttin');
    
  
// }

function addtask(e){
         if(input.value===''){
             alert('add thing')
         }else{
            const listItem=document.createElement('li');
            listItem.className='display';
            listItem.append(document.createTextNode(input.value));
            const link=document.createElement('a');
            link.className='juu';
            link.innerHTML=`
            <i class="fa fa-remove"</i>
            `
            listItem.append(link)
            collection.append(listItem);
            storeinlocalStorage(input.value)
         }
        input.value=''
         e.preventDefault()
    
   
}

function storeinlocalStorage(value){
   let item;
   if(localStorage.getItem('names')===null){
       item=[]
   }else{
       item= JSON.parse(localStorage.getItem('names'));
   }
   item.push(value)
   localStorage.setItem('names',JSON.stringify(item))
}

function removeTask(e){
if(e.target.parentElement.classList.contains('juu')){
    if(confirm('Are you Sure?')){
        e.target.parentElement.parentElement.remove()
        deletefromLS(e.target.parentElement.parentElement)//whenever we clicked we delete it from ls
    }
    
}
}
function deletefromLS(listItem){
  let item;
  if(localStorage.getItem('names')===null){
      item=[];
  }else{
      item=JSON.parse(localStorage.getItem('names'));
      
  }
  item.forEach((ite,index)=>{
    //   console.log(listItem.innerText.includes(ite))
    if(listItem.innerText.includes(ite)===true){
        item.splice(index,1)
    }
})
 localStorage.setItem('names',JSON.stringify(item))
}



function datareachFromLS(){
    let item;
    if(localStorage.getItem('names')===null){
        item=[];
    }else{
        item=JSON.parse(localStorage.getItem('names'));
    }

    item.forEach((post)=>{
     const listItem=document.createElement('li');
    listItem.className='display';
    listItem.append(document.createTextNode(post));
    const Link=document.createElement('a')
    Link.className='juu';
    Link.innerHTML=`
    <i class="fa fa-remove"</i>
    `
    listItem.append(Link)
    collection.append(listItem);
   
    })
}
function filterTask(e){
    const inputValue=e.target.value.toLowerCase();
    const li=document.getElementsByClassName('display');
    
    for(let i=0;i<li.length;i++){
       let liText=li[i].firstChild.textContent;
       if(liText.includes(inputValue)===true){
           li[i].style.display='block'
       }else{
        li[i].style.display='none' 
       }
    }

    // document.querySelectorAll('.display').forEach((f)=>{
    //     const item=f.firstChild.textContent;
    //     if(item.toLowerCase().indexOf(inputValue)!=-1){
    //       f.style.display='block'
    //     }else{
    //         f.style.display='none';
    //     }
    // })
}