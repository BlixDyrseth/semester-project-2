import { apiUrl } from "./settings/api.js";
import { baseUrl, picUrl } from "./settings/api.js";
import { displayMessage } from "./components/displayMessage.js";
import { toggleCart } from "./components/cart/toggleCart.js";
import { mobilNav } from "./components/mobilNav.js";
import { loginBtn } from "./components/nav/loginBtn.js";
import { adminNav } from "./components/nav/adminNav.js";
import { loginDropdown } from "./components/nav/loginDropdown.js";
import { logOut } from "./components/login/logOut.js";
import { loginDropdownMobil } from "./components/nav/loginDropdown.js";
import { amountCart } from "./components/cart/amountCart.js";

const titleDetails = document.querySelector("#titledetails");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = apiUrl + "/" + id + picUrl;

const picContainer = document.querySelector(".pic-container");

const infoContainer = document.querySelector(".info-container");

const messageContainer = document.querySelector(".message-container");

console.log(url);

async function getProduct() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    const details = json.data;

    infoContainer.innerHTML = "";

    console.log(details);

    createHtml(details);
  } catch (error) {
    displayMessage("error", error, ".message-container");
  }
}

getProduct();

function createHtml(detail) {
  infoContainer.innerHTML += `<div>
    <h1>${detail.attributes.title}</h1>
    <h2 class="price">${detail.attributes.price} kr</h2>
    <p>${detail.attributes.description}</p>
    <div data-image="${detail.attributes.product_img.data.attributes.formats.thumbnail.url}" data-id="${detail.id}" data-title="${detail.attributes.title}" data-price="${detail.attributes.price}" data-description="${detail.attributes.description}" class="button" id="addToCartBtn">
    <a>Add to cart</a>
    </div>
    </div>`;

  picContainer.innerHTML = `<img class="detail-img" src="${detail.attributes.product_img.data.attributes.url}" alt="${detail.attributes.product_img.data.attributes.alternativeText}">`;

  const addToCartBtn = document.querySelectorAll("#addToCartBtn");

  addToCartBtn.forEach((button) => {
    button.addEventListener("click", toggleCart);
  });

  //picContainer.innerHTML += `<img src="${detail.image.formats.large.url}" alt="${detail.images[0].alt}"/>` */

  titleDetails.innerHTML = `${detail.attributes.title} - SCOR`;
}

amountCart();

mobilNav();

loginBtn();

loginDropdown();

loginDropdownMobil();

logOut();

adminNav();
