let button=document.getElementById('btn');
 button.addEventListener('click',()=>{
    let input=document.getElementById('demo').value;
   let list=document.getElementById('list');
    let li=document.createElement('li')
    
   list.appendChild(li);
  li.textContent=input;
  document.getElementById('demo').value="";
  let boton =document.createElement('button');
  boton.innerText="delete";
  li.append(boton);
});
let delet=document.querySelector('ul');
delet.addEventListener('click',(e)=>{
    let list =document.getElementById('list');
    let li=e.target.parentNode;
    list.removeChild(li);
});
