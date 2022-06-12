import { getCart } from "../../utils/storage.js";

export function amountCart() {
  const cart = getCart();

  console.log(cart.length);

  const cartBtn = document.querySelector(".cart-btn");

  if (cart.length > 0.1) {
    cartBtn.innerHTML += `<div class="cart-amount">${cart.length}</div>`;
  }
}
