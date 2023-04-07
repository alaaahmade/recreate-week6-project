/* eslint-disable no-else-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-cond-assign */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
// const products = document.getElementById('products');
const category = document.getElementById('category');
const close = document.getElementById('close');
const proNam = document.getElementById('name');
const proPrice = document.getElementById('price');
const ProDescription = document.getElementById('des');
const AddBtn = document.getElementById('addition');
const img = document.getElementById('img');
const AddSection = document.getElementById('secAdd');
const AdditionBtn = document.getElementById('AdditionBtn');
AdditionBtn.addEventListener('click', () => {
  AddSection.style.display = 'block';
});

close.addEventListener('click', () => {
  AddSection.style.display = 'none';
});
const AddProductLocal = () => {
  let id;
  if (category.value === 'TV') {
    id = 2;
  } else if (category.value === 'headphone') {
    id = 3;
  } else if (category.value === 'phone') {
    id = 1;
  }
  const product = {
    name: proNam.value,
    price: proPrice.value,
    catogry_id: id,
    img: img.value,
    discreption: ProDescription.value,
  };
  proNam.value = '';
  proPrice.value = '';
  category.value = '';
  img.value = '';
  ProDescription.value = '';
  return product;
};
AddBtn.addEventListener('click', (AddBtn) => {
  AddBtn.preventDefault();
  if (proNam.value.trim() === '' || proPrice.value.trim() === '' || ProDescription.value.trim() === '') {
    // eslint-disable-next-line no-useless-return
    return;
  } else {
    console.log('aaaaaaaa');
    fetch('/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(AddProductLocal()),
    }).then((data) => data.json())
      .catch(console.log);
  }
});
