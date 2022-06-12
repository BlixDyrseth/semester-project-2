import { apiUrl, picUrl } from "./settings/api.js";
import { displayMessage } from "./components/displayMessage.js";
import { renderFeatured } from "./components/renderFeatured.js";
import { renderWomenProducts } from "./components/renderProducts.js";
import { searchProducts } from "./components/searchProducts.js";
import { mobilNav } from "./components/mobilNav.js";
import { loginBtn } from "./components/nav/loginBtn.js";
import { adminNav } from "./components/nav/adminNav.js";
import { loginDropdown } from "./components/nav/loginDropdown.js";
import { logOut } from "./components/login/logOut.js";
import { loginDropdownMobil } from "./components/nav/loginDropdown.js";

const container = document.querySelector(".products-container");

const url = apiUrl + picUrl;

async function callApi() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    const products = json.data;

    console.log(products);

    renderWomenProducts(products, ".products-container");
    searchProducts(products);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".products-container");
  }
}

callApi();

mobilNav();

loginBtn();

loginDropdown();

loginDropdownMobil();

logOut();

adminNav();
