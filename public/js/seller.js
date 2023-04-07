/* eslint-disable no-else-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-cond-assign */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
// const products = document.getElementById('products');
const cartNum = document.getElementById('cartNum');
const category = document.getElementById('category');
const close = document.getElementById('close');
const proNam = document.getElementById('name');
const proPrice = document.getElementById('price');
const ProDescription = document.getElementById('des');
const AddBtn = document.getElementById('addition');
const img = document.getElementById('img');
const AddSection = document.getElementById('secAdd');
const AdditionBtn = document.getElementById('AdditionBtn');
const edit = document.getElementById('save');
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
    return ;
  } else {
    console.log("aaaaaaaa");
    fetch('/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(AddProductLocal()),
    }).then((data) => data.json())
      .catch(console.log);
  }
});
// const AddToPage = (arr) => {
//   products.innerHTML = '';
//   arr.forEach((ele) => {
//     const item = document.createElement('div');
//     item.setAttribute('dataId', ele.id);
//     item.classList.add('item');
//     const img = document.createElement('img');
//     img.src = ele.img;
//     const divp = document.createElement('div');
//     const title = document.createElement('h3');
//     title.textContent = ele.name;
//     const price = document.createElement('p');
//     price.textContent = '$';
//     const num = document.createElement('span');
//     num.textContent = ele.price;
//     price.appendChild(num);
//     divp.appendChild(title);
//     divp.appendChild(price);
//     const description = document.createElement('p');
//     description.classList.add('desP');
//     description.textContent = ele.disc;
//     const RemoveButton = document.createElement('button');
//     RemoveButton.id = 'remove';
//     RemoveButton.textContent = 'Remove Product';
//     const EditButton = document.createElement('button');
//     EditButton.id = 'Edit';
//     EditButton.textContent = 'Edit Product';
//     item.appendChild(img);
//     item.appendChild(divp);
//     item.appendChild(description);
//     item.appendChild(RemoveButton);
//     item.appendChild(EditButton);
//     products.appendChild(item);
//     RemoveButton.addEventListener('click', () => {
//       remove(ele.id);
//     });
//     EditButton.addEventListener('click', () => {
//       AddSection.style.display = 'block';
//       edit.style.display = 'block';
//       Edit(ele);
//     });
//   });
// };
// AddToPage(MyProductArr);

// const getTotalProducts = () => {
//   const num = cartArr.length;
//   cartNum.textContent = num;
//   let price = 0;
//   cartArr.forEach((pro) => {
//     price += pro.price;
//   });
//   totalPrice.textContent = price;
// };
// getTotalProducts();

// const remove = (id) => {
//   productArr = productArr.filter((ele) => ele.id !== id);
//   localStorage.setItem('products', JSON.stringify(productArr));
//   MyProductArr = MyProductArr.filter((ele) => ele.id !== id);
//   localStorage.setItem('myProducts', JSON.stringify(MyProductArr));
//   AddToPage(MyProductArr);
// };

// const Edit = (e) => {
//   AddSection.lastElementChild.lastElementChild.style.display = 'block';
//   const { id } = e;
//   proNam.value = e.name;
//   proPrice.value = e.price;
//   category.value = e.category;
//   img.value = e.img;
//   ProDescription.value = e.disc;
//   AddSection.style.display = 'block';
//   edit.addEventListener('click', (edit) => {
//     edit.preventDefault();
//     save(e, id);
//   });
// };

// const save = (e, id) => {
//   MyProductArr.forEach((pro) => {
//     if (pro.id = id) {
//       pro.name = proNam.value;
//       pro.price = proPrice.value;
//       pro.category = category.value;
//       pro.img = img.value;
//       pro.disc = ProDescription.value;
//     }
//   });
//   AddSection.style.display = 'none';
//   localStorage.setItem('myProducts', JSON.stringify(MyProductArr));
//   AddToPage(MyProductArr);
// };
