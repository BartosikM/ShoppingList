
const input = document.querySelector('.mainInput');
const addBtn = document.querySelector('.add');
const clearBtn = document.querySelector('.clear');
const errorInfo = document.querySelector('.error');
const ulList = document.querySelector('.list');
const popup  = document.querySelector('.popup');
const popupInput = document.querySelector('.popupInput');
const popupAddBtn = document.querySelector('.popupAddBtn');
const popupCloseBtn = document.querySelector('.popupCloseBtn');
let newProduct
let productToEdit


const addNewProduct = () =>{
  if(input.value !== ''){
      newProduct = document.createElement('li');
      newProduct.textContent = input.value;
      ulList.appendChild(newProduct);
      createToolsArea();

      input.value = '';
      errorInfo.textContent = '';
  }else{
   errorInfo.textContent = 'Wpisz nazwę produktu'
  }
}

const createToolsArea = () =>{
   const toolsArea = document.createElement('div');
   toolsArea.classList.add('tools');
   newProduct.appendChild(toolsArea);

   const doneBtn = document.createElement('button');
   doneBtn.classList.add('done');
   doneBtn.textContent = '✓';

   const editBtn = document.createElement('button');
   editBtn.classList.add('edit');
   editBtn.textContent = "EDIT";

   const removeBtn = document.createElement('button');
   removeBtn.classList.add('remove');
   removeBtn.textContent = '✕';

   toolsArea.append(doneBtn, editBtn, removeBtn);
}
const clearList = () =>{
   ulList.textContent = ''
   errorInfo.textContent = "Brak produktów na liście"
}
const checkClick = e =>{
   if(e.target.matches('.done')){
      e.target.closest('li').classList.toggle('check');
   }else if(e.target.matches('.edit')){
      editProduct(e)
   }else if(e.target.matches('.remove')){
      e.target.closest('li').remove()

      const allLi = document.querySelectorAll('li');
      if(allLi.length === 0){
         errorInfo.textContent = "Brak produktów na liście"
      }
   }
}

const editProduct = e =>{
   productToEdit = e.target.closest('li').firstChild;
   popupInput.value = productToEdit.textContent;

   popup.classList.add('active');
   popup.classList.remove('popupErrorInfo')
}

const closePopup = ()=>{
   popup.classList.remove('active');
}

const saveEdit = e=>{
   if(popupInput.value !== ''){
      productToEdit.textContent = popupInput.value;
      popup.classList.remove('active');
   }else{
      popup.classList.add('popupErrorInfo');
   }
}

const enterKey = e=>{
   if(e.key === 'Enter'){
      addNewProduct()
   }
}
const popupEnterKey =e=>{
   if(e.key ==='Enter'){
      saveEdit()
   }
}

addBtn.addEventListener('click', addNewProduct)
clearBtn.addEventListener('click', clearList)
ulList.addEventListener('click', checkClick)
popupCloseBtn.addEventListener('click', closePopup)
popupAddBtn.addEventListener('click', saveEdit)
input.addEventListener('keyup', enterKey)
popupInput.addEventListener('keyup', popupEnterKey)