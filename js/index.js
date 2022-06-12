import { apiUrl, picUrl } from "./settings/api.js";
import { displayMessage } from "./components/displayMessage.js";
import { renderFeatured } from "./components/renderFeatured.js";
import { mobilNav } from "./components/mobilNav.js";
import { loginDropdown } from "./components/nav/loginDropdown.js";
import { getBanner } from "./components/banner.js";
import { loginBtn } from "./components/nav/loginBtn.js";
import { adminNav } from "./components/nav/adminNav.js";
import { logOut } from "./components/login/logOut.js";
import { loginDropdownMobil } from "./components/nav/loginDropdown.js";
import { amountCart } from "./components/cart/amountCart.js";

async function callApi() {
  try {
    const response = await fetch(apiUrl + picUrl);
    const json = await response.json();

    const products = json.data;

    console.log(products);

    renderFeatured(products, ".featured-container");
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".featured-container");
  }
}

amountCart();

callApi();

mobilNav();

loginDropdown();

loginDropdownMobil();

getBanner();

loginBtn();

adminNav();

logOut();
