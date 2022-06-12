import { getCart } from "../../utils/storage.js";
import { amountCart } from "./amountCart.js";

export function toggleCart() {
  const id = this.dataset.id;
  const title = this.dataset.title;
  const price = this.dataset.price;
  const description = this.dataset.description;
  const image = this.dataset.image;

  console.log(id, title, price, description, image);

  const currentCart = getCart();

  const productExist = currentCart.find(function (product) {
    return product.id === id;
  });

  if (productExist === undefined) {
    const product = {
      id: id,
      title: title,
      price: price,
      description: description,
      image: image,
    };
    currentCart.push(product);
    saveCart(currentCart);
    window.location.reload();
  } else {
    const newCart = currentCart.filter((product) => FormDataEvent.id !== id);
    saveCart(newCart);
  }
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
