export function renderFeatured(productsToRender) {
  const container = document.querySelector(".featured-container");

  container.innerHTML = "";

  productsToRender.forEach(function (product) {
    if (product.attributes.featured) {
      container.innerHTML += `<a href="product-details.html?id=${product.id}"> 
                                    <div class="product-container">
                                    <img class="thumbnail" src="${product.attributes.product_img.data.attributes.formats.thumbnail.url}" alt="${product.attributes.product_img.data.attributes.alternativeText}">
                                     <div class="info-line">
                                     <h3>${product.attributes.title}</h3>
                                     <h3>${product.attributes.price} kr</h3>
                                     </div>
                                 </div>
                                 </a>`;
    }
  });
}
