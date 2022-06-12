import { getCart } from "../../utils/storage.js";
import { renderCart } from "./renderCart.js";

export function removeCartItem() {
  const currentCart = getCart();

  console.log("I am clicked");

  const productExist = currentCart.find(function (product) {
    return product.id === id;
  });

  if (productExist) {
    localStorage.removeItem("cart", productExist);
    window.location.reload();
  }

  //  const removeFromCartBtn = document.querySelectorAll(".remove-cart-item-btn");
}
