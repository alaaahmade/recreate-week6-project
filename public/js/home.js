const cartNum = document.getElementById('cartNum');

let cartArr = [];

if (localStorage.getItem('cart')) {
  const productA = JSON.parse(localStorage.getItem('cart'));
  cartArr = [...productA];
}
const getTotalProducts = () => {
  const num = cartArr.length;
  cartNum.textContent = num;
  let price = 0;
  cartArr.forEach((pro) => {
    price += pro.price;
  });
  // eslint-disable-next-line no-undef
  totalPrice.textContent = price;
};
getTotalProducts();
