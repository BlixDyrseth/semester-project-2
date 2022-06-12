import { getCart } from "../../utils/storage.js";
import { displayMessage } from "../displayMessage.js";

export function renderCheckout() {
  const cart = getCart();

  console.log(cart);

  const checkoutConatiner = document.querySelector(".checkout-container-items");
  const totalContainer = document.querySelector(".total-container");

  if (cart.length === 0) {
    displayMessage("warning", "Cart is empty", ".cart-container");
  }

  cart.forEach((product) => {
    checkoutConatiner.innerHTML += `<div class="checkout-item">
                                      <p>${product.title}</p>
                                      <b>${product.price} kr</b>
                                    </div>`;
  });
}
