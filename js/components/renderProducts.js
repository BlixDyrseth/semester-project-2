// Render womens products

export function renderWomenProducts(productsToRender) {
  const container = document.querySelector(".products-container");

  container.innerHTML = "";

  productsToRender.forEach(function (product) {
    if (product.attributes.category === "women") {
      console.log(
        "This is from renderProducts.js:",
        product.attributes.category
      );
      container.innerHTML += ` <a href="product-details.html?id=${product.id}"> 
    <div class="product-container">
    <img class="thumbnail" src="${product.attributes.product_img.data.attributes.formats.thumbnail.url}" alt="${product.attributes.product_img.data.attributes.alternativeText}">
     <div class="info-line">
     <h3>${product.attributes.title}</h3>
     <h3>${product.attributes.price} kr</h3>
     </div>
     </a>
</div>
 `;
    }
  });
}

// Render mens products

export function renderMenProducts(productsToRender) {
  const container = document.querySelector(".products-container");

  container.innerHTML = "";

  productsToRender.forEach(function (product) {
    if (product.attributes.category === "men") {
      console.log(
        "This is from renderProducts.js:",
        product.attributes.category
      );
      container.innerHTML += ` <a href="product-details.html?id=${product.id}"> 
    <div class="product-container">
    <img class="thumbnail" src="${product.attributes.product_img.data.attributes.formats.thumbnail.url}" alt="${product.attributes.product_img.data.attributes.alternativeText}">
     <div class="info-line">
     <h3>${product.attributes.title}</h3>
     <h3>${product.attributes.price} kr</h3>
     </div>
     </a>
</div>
 `;
    }
  });
}

// Render children products

export function renderChildrenProducts(productsToRender) {
  const container = document.querySelector(".products-container");

  container.innerHTML = "";

  productsToRender.forEach(function (product) {
    if (product.attributes.category === "children") {
      console.log(
        "This is from renderProducts.js:",
        product.attributes.category
      );
      container.innerHTML += ` <a href="product-details.html?id=${product.id}"> 
    <div class="product-container">
    <img class="thumbnail" src="${product.attributes.product_img.data.attributes.formats.thumbnail.url}" alt="${product.attributes.product_img.data.attributes.alternativeText}">
     <div class="info-line">
     <h3>${product.attributes.title}</h3>
     <h3>${product.attributes.price} kr</h3>
     </div>
     </a>
</div>
 `;
    }
  });
}

// Render all products

export function renderProducts(productsToRender) {
  const container = document.querySelector(".products-container");

  container.innerHTML = "";

  productsToRender.forEach(function (product) {
    if (product.attributes.category === "children") {
      console.log(
        "This is from renderProducts.js:",
        product.attributes.category
      );
      container.innerHTML += ` <a href="product-details.html?id=${product.id}"> 
    <div class="product-container">
    <img class="thumbnail" src="${product.attributes.product_img.data.attributes.formats.thumbnail.url}" alt="${product.attributes.product_img.data.attributes.alternativeText}">
     <div class="info-line">
     <h3>${product.attributes.title}</h3>
     <h3>${product.attributes.price} kr</h3>
     </div>
     </a>
</div>
 `;
    }
  });
}
