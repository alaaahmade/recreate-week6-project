/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
const products = document.getElementById('products');
const cartNum = document.getElementById('cartNum');

let cartArr = [];
if (localStorage.getItem('cart')) {
  const products = JSON.parse(localStorage.getItem('cart'));
  cartArr = [...products];
}

const addFromLocale = (arr) => {
  products.innerHTML = '';
  arr.forEach((phone) => {
    const item = document.createElement('div');
    item.setAttribute('dataId', cartArr.indexOf(phone));
    item.classList.add('item');
    const img = document.createElement('img');
    img.src = phone.img;
    const divp = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = phone.name;
    const price = document.createElement('p');
    price.textContent = '$';
    const num = document.createElement('span');
    num.textContent = phone.price;
    price.appendChild(num);
    divp.appendChild(title);
    divp.appendChild(price);
    const description = document.createElement('p');
    description.classList.add('desP');
    description.textContent = phone.disc;
    const btnDiv = document.createElement('div');
    btnDiv.classList.add('buttons');
    const button = document.createElement('button');
    button.id = 'Remove';
    button.textContent = 'Remover';
    item.appendChild(img);
    item.appendChild(divp);
    item.appendChild(description);
    btnDiv.appendChild(button);
    item.appendChild(btnDiv);
    products.appendChild(item);
  });
};
addFromLocale(cartArr);
const addERemove = () => {
  const addBtns = document.querySelectorAll('#Remove');

  addBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      Remove(btn.parentElement.parentElement.getAttribute('dataId'), cartArr);
    });
  });
};
// pure function
const Remove = (id, arr) => {
  const newcartArr = arr.filter((ele) => arr.indexOf(ele) !== id);
  localStorage.setItem('cart', JSON.stringify(newcartArr));
  addFromLocale(newcartArr);
  addERemove();
  getTotalProducts();
};
addERemove();

const getTotalProducts = () => {
  const num = cartArr.length;
  cartNum.textContent = num;
  let price = 0;
  cartArr.forEach((pro) => {
    price += pro.price;
  });
  totalPrice.textContent = price;
};
getTotalProducts();
