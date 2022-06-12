import { renderProducts } from "./renderProducts.js";
import { displayMessage } from "./displayMessage.js";

export function searchProducts(productsToRender) {
  const search = document.querySelector(".search");
  const messageForSearch = document.querySelector(".message-container");

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredProducts = productsToRender.filter(function (product) {
      if (
        product.attributes.title.toLowerCase().includes(searchValue) ||
        product.attributes.description.toLowerCase().includes(searchValue)
      ) {
        return true;
      }
    });

    console.log(filteredProducts);

    if (filteredProducts.length === 0) {
      displayMessage("warning", "No matching products", ".message-container");
    } else {
      messageForSearch.innerHTML = " ";
    }

    renderProducts(filteredProducts);
  };
}
//||trim().toLowerCase();
