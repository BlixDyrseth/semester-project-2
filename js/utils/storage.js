const tokenKey = "token";
const userKey = "user";

export function saveToken(token) {
  saveToStorage(tokenKey, token);
}

export function getToken() {
  return getFromStorage(tokenKey);
}

export function removeToken() {
  return removeFromStorage(tokenKey);
}

export function removeUser() {
  return removeFromStorage(userKey);
}

export function saveUser(user) {
  saveToStorage(userKey, user);
}

export function getUsername() {
  const user = getFromStorage(userKey);

  if (user) {
    return user.username;
  }
  return null;
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return null;
  }

  return JSON.parse(value);
}

function removeFromStorage(key) {
  const value = localStorage.removeItem(key);

  if (!value) {
    return null;
  }

  return JSON.parse(value);
}

export function getCart() {
  const cart = localStorage.getItem("cart");

  if (!cart) {
    return [];
  } else {
    return JSON.parse(cart);
  }
}
