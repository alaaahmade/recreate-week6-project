/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
const cartNum = document.getElementById('cartNum');

fetch('/products/getFromCart')
  .then((data) => data.json())
  .then(addFromLocale)
  .catch(console.log);

// addFromLocale(cartArr);
// const addERemove = () => {
//   const addBtns = document.querySelectorAll('#Remove');

//   addBtns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//       Remove(btn.parentElement.parentElement.getAttribute('dataId'), cartArr);
//     });
//   });
// };
// // pure function
// const Remove = (id, arr) => {
//   const newcartArr = arr.filter((ele) => arr.indexOf(ele) !== id);
//   localStorage.setItem('cart', JSON.stringify(newcartArr));
//   addFromLocale(newcartArr);
//   addERemove();
//   getTotalProducts();
// };
// addERemove();

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
