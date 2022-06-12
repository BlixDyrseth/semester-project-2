import { mobilNav } from "./components/mobilNav.js";
import { loginBtn } from "./components/nav/loginBtn.js";
import { adminNav } from "./components/nav/adminNav.js";
import { loginDropdown } from "./components/nav/loginDropdown.js";
import { logOut } from "./components/login/logOut.js";
import { loginDropdownMobil } from "./components/nav/loginDropdown.js";
import { amountCart } from "./components/cart/amountCart.js";
import { apiUrl, picUrl } from "./settings/api.js";
import { displayMessage } from "./components/displayMessage.js";
import { getToken } from "./utils/storage.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "/";
}

const productUrl = apiUrl + "/" + id;

const form = document.querySelector("#editForm");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
const image = document.querySelector("#image");

async function editFrom() {
  try {
  } catch (error) {
  } finally {
  }
}

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const titelValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description;
  const idValue = idInput.value;
  /*
  if (
    titelValue.length === 0 ||
    priceValue.length === 0 ||
    isNaN(priceValue) ||
    descriptionValue.length === 0
  ) {
    console.log("WRONG");
  }
*/
  updateProduct(titelValue, priceValue, descriptionValue, idValue);
}

async function updateProduct(title, price, description, id) {
  const data = JSON.stringify({
    title: title,
    price: price,
    description: description,
  });

  const token = getToken();

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(productUrl, options);
    const json = await response.json();

    if (json.updatedAt) {
      console.log("Product updated");
    }

    if (json.error) {
      console.log(json.message);
    }
  } catch (error) {
    console.log(error);
  }
}

amountCart();

mobilNav();

loginBtn();

adminNav();

loginDropdown();

loginDropdownMobil();

logOut();
