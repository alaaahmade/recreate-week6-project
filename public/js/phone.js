/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */

fetch('/products/phones')
  .then((data) => data.json())
  .then(addFromLocale)
  .then(() => {
    addBtns = document.querySelectorAll('#Add');
    addBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        addcart(btn.parentElement.getAttribute('dbid'));
      });
    });
  })
  .catch(console.error);
