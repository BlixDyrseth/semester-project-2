import { mobilNav } from "./components/mobilNav.js";
import { loginBtn } from "./components/nav/loginBtn.js";
import { adminNav } from "./components/nav/adminNav.js";
import { loginDropdown } from "./components/nav/loginDropdown.js";
import { logOut } from "./components/login/logOut.js";
import { loginDropdownMobil } from "./components/nav/loginDropdown.js";
import { amountCart } from "./components/cart/amountCart.js";
import { apiUrl, picUrl } from "./settings/api.js";
import { displayMessage } from "./components/displayMessage.js";

const url = apiUrl + picUrl;

async function edit() {
  const container = document.querySelector(".edit-page");

  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json.data);

    const productItem = json.data;

    container.innerHTML = `<div class="loader"></div>`;

    productItem.forEach((product) => {
      container.innerHTML += `<a class="" href="editform.html?id=${product.id}">
                                <div class="edit-card">
                                  <img src=${product.attributes.product_img.data.attributes.formats.thumbnail.url} />
                                  <h3>Title: ${product.attributes.title}</h3>
                                  <b>Price:</b>
                                  <p>${product.attributes.price} kr</p>
                                  <b>Category:</b>
                                  <p>${product.attributes.category}</p>
                                  <b>Description:</b>
                                  <p>${product.attributes.description}</p>
                                </div>
                              </a>`;
    });
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".edit-page");
  }
}

edit();

amountCart();

mobilNav();

loginBtn();

adminNav();

loginDropdown();

loginDropdownMobil();

logOut();
