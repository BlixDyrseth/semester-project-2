import { getCart } from "../../utils/storage.js";
import { displayMessage } from "../displayMessage.js";

export function renderCart() {
  const cart = getCart();

  console.log(cart);

  const cartContainer = document.querySelector(".cart-container");

  if (cart.length === 0) {
    displayMessage("warning", "Cart is empty", ".cart-container");
  }

  cart.forEach((product) => {
    cartContainer.innerHTML += `<div class="cart-item">
                                    <div class="cart-item-info">
                                        <div>
                                            <img src="${product.image}">
                                        </div>
                                        <div>
                                            <h2>${product.title}</h2>
                                            <h2>${product.price} kr</h2>
                                            <a href="product-details.html?id=${product.id}">Show product page</a>
                                        </div>
                                        <div id="deleteCartItem" class="remove-cart-item-btn">
                                             <i class="fas fa-times"></i>
                                        </div>
                                        </div>
                                    </div>`;
  });
}
