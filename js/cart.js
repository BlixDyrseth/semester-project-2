import { getCart } from "./utils/storage.js";
import { mobilNav } from "./components/mobilNav.js";
import { loginBtn } from "./components/nav/loginBtn.js";
import { adminNav } from "./components/nav/adminNav.js";
import { renderCart } from "./components/cart/renderCart.js";
import { loginDropdown } from "./components/nav/loginDropdown.js";
import { logOut } from "./components/login/logOut.js";
import { loginDropdownMobil } from "./components/nav/loginDropdown.js";
import { displayMessage } from "./components/displayMessage.js";
import { removeCartItem } from "./components/cart/removeCartItem.js";
import { renderCheckout } from "./components/cart/renderCheckout.js";
import { renderTotal } from "./components/cart/renderTotal.js";
import { amountCart } from "./components/cart/amountCart.js";

const removeFromCartBtn = document.querySelectorAll("#deleteCartItem");
const checkoutConatiner = document.querySelector(".checkout-container");

const cart = getCart();

const cartContainer = document.querySelector(".cart-container");

if (cart.length === 0) {
  displayMessage("warning", "Cart is empty", ".cart-container");
}

console.log(removeFromCartBtn);

removeFromCartBtn.forEach((button) => {
  button.addEventListener("click", removeCartItem);
});

amountCart();

renderCart(cart);

renderCheckout(cart);

renderTotal(cart);

mobilNav();

loginBtn();

adminNav();

loginDropdown();

loginDropdownMobil();

logOut();
