/* eslint-disable no-undef */
let cartArr = [];
if (localStorage.getItem('cart')) {
  const locale = JSON.parse(localStorage.getItem('cart'));
  cartArr = [...locale];
}

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
