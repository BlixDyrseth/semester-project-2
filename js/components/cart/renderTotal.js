import { getCart } from "../../utils/storage.js";

export function renderTotal() {
  const cart = getCart();

  const totalContainer = document.querySelector(".total-container");

  let sum = 0;

  for (let i = 0; i < cart.length; i++) {
    sum = sum + parseInt(cart[i].price);

    totalContainer.innerHTML = `<b>${sum} kr</b>`;
  }
}
