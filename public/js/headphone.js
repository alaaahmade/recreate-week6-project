/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
const products = document.getElementById('products');
const cartNum = document.getElementById('cartNum');
const searchBtn = document.getElementById('search');
const searchInput = document.getElementById('search-input');
let productArr = [];
if (localStorage.getItem('products')) {
  const products = JSON.parse(localStorage.getItem('products'));
  productArr = [...products];
}
if (localStorage.getItem('myProducts')) {
  const sellerArr = JSON.parse(localStorage.getItem('myProducts'));
  productArr = [...productArr, ...sellerArr];
}

const phonearr = productArr.filter((phone) => phone.category === 'headphone');
const addFromLocale = (arr) => {
  products.innerHTML = '';
  arr.forEach((phone) => {
    const item = document.createElement('div');
    item.setAttribute('dataId', productArr.indexOf(phone));
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
    const button = document.createElement('button');
    button.id = 'Add';
    button.textContent = 'Add to cart';
    item.appendChild(img);
    item.appendChild(divp);
    item.appendChild(description);
    item.appendChild(button);
    products.appendChild(item);
  });
};
addFromLocale(phonearr);
const addBtns = document.querySelectorAll('#Add');

addBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    addToLocale(btn.parentElement.getAttribute('dataId'));
  });
});

let cartArr = [];
if (localStorage.getItem('cart')) {
  const locale = JSON.parse(localStorage.getItem('cart'));
  cartArr = [...locale];
}
const addToLocale = (id) => {
  cartArr.push(productArr[id]);
  localStorage.setItem('cart', JSON.stringify(cartArr));
  getTotalProducts();
};

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

searchBtn.addEventListener('click', (searchBtn) => {
  searchBtn.preventDefault();
  if (!searchInput.value.trim() === '') {
    getSearchRes(searchInput.value);
  }
});

const getSearchRes = (value) => {
  const res = phonearr.filter((e) => e.name.includes(value));
  if (res.length > 0) {
    addFromLocale(res);
  } else {
    addFromLocale(phonearr);
    window.alert('This product does not exist');
  }
};
