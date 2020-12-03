class Table{
    constructor(name,age,cnic,id,haslaptop,resut){
   this.name=name;
   this.age=age;
   this.cnic=cnic;
   this.id=id;
   this.haslaptop=haslaptop;
   this.resut=resut;
   
    }
}
let resut;
const fileInput=document.querySelector('#fileInput');
fileInput.addEventListener('change',(e)=>{
  let target=e.target;
  const reader=new FileReader();
  reader.onload=function(){
     resut = reader.result;
   
  }
  reader.readAsDataURL(target.files[0])
  
  })

class UI{
  addtabletoList(tableValues){
   
  const trElement=document.createElement('tr');
  trElement.className='trClass';
  trElement.id=tableValues.id;
  trElement.innerHTML=`
  <td>${tableValues.name}</td>
  <td>${tableValues.age}</td>
  <td>${tableValues.cnic}</td>
  <td><span> ${tableValues.haslaptop ? 'Yes' : 'No'}</span></td>
 
  <td style="display: none">${tableValues.resut}</td>
  <td>
  <span class='span'>
   <i class='fa fa-remove'></i>
  <i class='fa fa-edit'></i>
  <i class='fa fa-align-justify'></i>
  </span></td>
  
  `;

   tBody.append(trElement)
   console.log(trElement)
  
  }
  removing(targot){
   if(targot.className==='fa fa-remove'){
    targot.parentElement.parentElement.parentElement.remove()
    
   }
  }
  viewing(targettoyoutube){
  if(targettoyoutube.className==='fa fa-align-justify'){
     document.querySelector('.models').style.display='block';
     let tar=targettoyoutube.parentElement.parentElement.parentElement;
   var getat=tar.getAttribute('id');
   targettoyoutube.setAttribute('id',getat)
  if(targettoyoutube.id===tar.id){
    const div=document.querySelector('.mcontent');
     let t1= tar.cells[0].innerText;
     let t2= tar.cells[1].innerText;
     let t3= tar.cells[2].innerText;
     let t4=tar.cells[3].innerText;
     // document.createElement('div').innerHTML=``
     div.innerHTML=`
    
    <div>
    <div>
    NAME : <input id="modelInput1" class='inpStyle1'  type="text" value='${t1}'>
    </div>
    <div>
    AGE :<input id="modelInput2" class='inpStyle2'  type="text" value='${t2}'>
    </div>
    <div>
    CNIC: <input id="modelInput3" class='inpStyle3' type="text" value='${t3}'>
    </div>
    <span>Have Laptop : ${t4}</span>
    </div>
  <div>
  <img src="${tar.cells[5].innerText}" alt="">
  
  </div>
   
  
  
    `
    let inputDisplay= document.getElementsByClassName('inpStyle');
    for(let i=0;i<inputDisplay.length;i++){
     inputDisplay[i].disabled=true;
    }

   
    const editBtn=document.querySelector('.editBtn')
    let getattr=tar.getAttribute('id');
    editBtn.setAttribute('id',getattr)
  editBtn.addEventListener('click',()=>{
    if(editBtn.id===tar.id){
      let inputDisplay= document.getElementsByClassName('inpStyle');
    for(let i=0;i<inputDisplay.length;i++){
     inputDisplay[i].disabled=false;
        }
            }
                })
      const updateBtn=document.querySelector('.updateBtn');
      let getatt=tar.getAttribute('id');
       updateBtn.setAttribute('id',getatt)
                
updateBtn.addEventListener('click',()=>{
   if(updateBtn.id===tar.id){
    
    tar.cells[0].innerText=document.querySelector('#modelInput1').value;
    tar.cells[1].innerText =document.querySelector('#modelInput2').value;
    tar.cells[2].innerText=document.querySelector('#modelInput3').value;
    document.querySelector('.models').style.display='none';
    
 }
})
  }
     
  }
  }
  
  clearAll(){
    document.querySelector('#textInput').value='';
    document.querySelector('#ageInput').value='';
    document.querySelector('#cnicInput').value='';
    document.querySelector('#fileInput').value=''
    document.querySelector('#chekbox').checked='';
  }
  removedx(){
    document.querySelector('.models').style.display='none';
 
  }
  backtomenu(){
    const a3=document.querySelector('.a1');
    a3.setAttribute('href','./index.html')
  }
  outsideclicking(targeting){
    const model=document.querySelector('.models');
    if(targeting===model){
    model.style.display='none';
    }
  }
updating(target){

  if(target.className==='fa fa-edit'){
    let trelement=target.parentElement.parentElement.parentElement;
  document.querySelector('#textInput').value=trelement.cells[0].innerText;
 document.querySelector('#ageInput').value=trelement.cells[1].innerText;
 document.querySelector('#cnicInput').value=trelement.cells[2].innerText;
 const buttcn=document.querySelector('.button');
 console.log(form.id)
 const getAtt=trelement.getAttribute('id');
 const setatt=buttcn.setAttribute('id',getAtt);
 buttcn.addEventListener('click',()=>{
   if(buttcn.id===trelement.id){
    trelement.cells[0].innerText=document.querySelector('#textInput').value
    trelement.cells[1].innerText=document.querySelector('#ageInput').value
    trelement.cells[2].innerText=document.querySelector('#cnicInput').value
   }
 })

 
  }
}
}
const form=document.querySelector('#form');
const tBody=document.querySelector('#tbody');
const crossTag=document.querySelector('#sspan'); 
const back=document.querySelector('.back');
tBody.addEventListener('click',removeTask);
tBody.addEventListener('click',views);
tBody.addEventListener('click',updateTask);
crossTag.addEventListener('click',removingx)
back.addEventListener('click',backing)
window.addEventListener('click',outsideclick)
form.addEventListener('submit',addFormtask);
function removingx(){
  const ui=new UI();
  ui.removedx()
}
 

function outsideclick(e){
  const ui=new UI();
  ui.outsideclicking(e.target)
}
function views(e){
  const ui=new UI();
  ui.viewing(e.target)
}
function backing(){
  const ui=new UI();
  ui.backtomenu()
}
function removeTask(e){
  const ui=new UI();
  ui.removing(e.target)
}
function updateTask(e){
  const ui=new UI();
  ui.updating(e.target)
}
function addFormtask(e){
    const textInput=document.querySelector('#textInput').value;
    const ageInput=document.querySelector('#ageInput').value;
    const cnicInput=document.querySelector('#cnicInput').value;
    const id= Math.floor(Math.random() * 30);
    const haslaptop=document.querySelector('#chekbox').checked;
    const table= new Table(textInput,ageInput,cnicInput,id,haslaptop,resut);
    console.log(table)
    const ui=new UI()
    ui.addtabletoList(table);
    ui.clearAll()
    
    e.preventDefault()
}
