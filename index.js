let button=document.getElementById('btn');
 button.addEventListener('click',()=>{
    let value=document.getElementById('demo').value;
   let list=document.getElementById('list');
    let li=document.createElement('li')
    let input=document.createElement('input');
  input.type="text";
  input.value=value;
  
   list.appendChild(li);
  li.appendChild(input);
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
