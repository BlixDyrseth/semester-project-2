import { displayMessage } from "./components/displayMessage.js";
import { baseUrl } from "./settings/api.js";
import { mobilNav } from "./components/mobilNav.js";
import { saveToken, saveUser } from "./utils/storage.js";
import { checkLenght } from "./components/login/validation.js";
import { loginBtn } from "./components/nav/loginBtn.js";
import { adminNav } from "./components/nav/adminNav.js";
import { loginDropdown } from "./components/nav/loginDropdown.js";
import { logOut } from "./components/login/logOut.js";
import { loginDropdownMobil } from "./components/nav/loginDropdown.js";
import { amountCart } from "./components/cart/amountCart.js";

const form = document.querySelector("#loginForm");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (checkLenght(usernameValue, 0)) {
    displayMessage("warning", "Please put in username", "#loginUserError");
  }

  if (checkLenght(passwordValue, 0)) {
    displayMessage("warning", "Please put in password", "#loginPasswordError");
  }

  doLogin(usernameValue, passwordValue);
}

async function doLogin(username, password) {
  const url = baseUrl + "/auth/local";

  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.user) {
      displayMessage("success", "Successfully logged in", ".message-container");

      console.log(json);

      saveToken(json.jwt);
      saveUser(json.user);

      location.href = "index.html";
    }

    if (json.error) {
      displayMessage("warning", "Invalid login details", ".message-container");
    }

    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

amountCart();

mobilNav();

loginBtn();

loginDropdown();

loginDropdownMobil();

logOut();

adminNav();
