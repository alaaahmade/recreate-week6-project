/* eslint-disable no-unused-vars */
const shop = document.getElementById('shop');
const pages = document.getElementById('pages');
const products = document.getElementById('products');
const searchBtn = document.getElementById('search');
const searchInput = document.getElementById('search-input');
// eslint-disable-next-line prefer-const
let addBtns = [];

const addtocartTable = (opj) => {
  fetch('/products/addToCart', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(opj),
  })
    .then((data) => data.json())
    .catch(console.error);
};

const addcart = (id) => {
  fetch('/products/All')
    .then((data) => data.json())
    .then((data) => data.filter((e) => e.id === +id))
    .then((data) => data[0])
    .then(addtocartTable)
    .catch(console.log);
};

const addFromLocale = (arr) => {
  products.innerHTML = '';
  arr.forEach((product) => {
    const item = document.createElement('div');
    item.setAttribute('dbid', product.id);
    item.classList.add('item');
    const img = document.createElement('img');
    img.src = product.img;
    const divp = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = product.name;
    const price = document.createElement('p');
    price.textContent = '$';
    const num = document.createElement('span');
    num.textContent = product.price;
    price.appendChild(num);
    divp.appendChild(title);
    divp.appendChild(price);
    const description = document.createElement('p');
    description.classList.add('desP');
    description.textContent = product.disc;
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

shop.addEventListener('click', () => {
  if (pages.style.display === 'flex') {
    pages.style.display = 'none';
  } else {
    pages.style.display = 'flex';
  }
});
