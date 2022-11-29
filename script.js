
const addBtn = document.querySelector('.add');
const error = document.querySelector('.error');
const bottom = document.querySelector('.bottom');
const deleteBtn = document.querySelectorAll('.delete');
const product = document.querySelectorAll('.product');
const list = document.querySelector('.list')



const addToList = () => {
   
   const input = document.getElementById('input').value;
   const newProduct = document.createElement('li');
   newProduct.appendChild(document.createTextNode(input));
   document.querySelector('ul').appendChild(newProduct);   
   

}


addBtn.addEventListener('click', addToList);
