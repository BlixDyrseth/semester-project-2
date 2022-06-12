import { displayMessage } from "./components/displayMessage.js";
import { getToken } from "./utils/storage.js";
import { baseUrl, apiUrl } from "./settings/api.js";
import { mobilNav } from "./components/mobilNav.js";
import { loginBtn } from "./components/nav/loginBtn.js";
import { adminNav } from "./components/nav/adminNav.js";
import { loginDropdown } from "./components/nav/loginDropdown.js";
import { logOut } from "./components/login/logOut.js";
import { loginDropdownMobil } from "./components/nav/loginDropdown.js";
import { amountCart } from "./components/cart/amountCart.js";

const token = getToken();

if (!token) {
  location.href = "/";
}

const form = document.querySelector("#addForm");
const message = document.querySelector("message-container");
const price = document.querySelector("#price");
const title = document.querySelector("#title");
const product_img = document.querySelector("#product_img");
const featured = document.querySelector("#featured");
const description = document.querySelector("#description");
const category = document.querySelector("#category");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const data = {};
  const formData = new FormData();

  const formElements = form.elements;

  formElements.forEach(({ name, type, value, files, ...element }) => {
    if (!["submi", "file"].includes(type)) {
      data[name] === value;
    } else if (type === "file") {
      files.forEach((file) => {
        formData.append(`files.${name}`, file, file.name);
      });
    }
  });

  console.log(data);

  console.log(formElements);
  /*
  //message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const featuredValue = featured.checked;
  const categoryValue = category.options[category.selectedIndex].value;

  console.log("priceValue", priceValue);
  console.log("descriptionValue", descriptionValue);
  console.log("titleValue", titleValue);
  console.log("featuredValue", featuredValue);
  console.log("categoryValue", categoryValue);

  if (titleValue.length === 0 || priceValue === 0 || isNaN(priceValue)) {
    displayMessage(
      "warning",
      "Please supply proper values",
      ".message-container"
    );
  }

  addProduct(
    titleValue,
    priceValue,
    descriptionValue, 
    featuredValue,
    categoryValue,
    image
  );
}

async function addProduct(
  title,
  price,
  description,
  featured,
  category,
  image
) {
  const url = baseUrl + "/products";
  const data = JSON.stringify({
    title,
    price,
    description,
    featured,
    category,
    product_img: image,
  });

  console.log(data);

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.created_at) {
      displayMessage("success", "Product created", ".message-container");
      form.reset();
    }
    if (json.error) {
      displayMessage("error", json.message, ".message-container");
    }
  } catch (error) {
    displayMessage("error", error, ".message-container");
  }*/
}

amountCart();

mobilNav();

loginBtn();

adminNav();

loginDropdown();

loginDropdownMobil();

logOut();
