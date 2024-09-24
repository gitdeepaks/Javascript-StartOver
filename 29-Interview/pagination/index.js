document.addEventListener("DOMContentLoaded", function () {
  const app = document.querySelector(".app");
  let products = [];
  let page = 1;

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      if (data && data.products) {
        products = data.products;
        // console.log(products);

        // render();
      }
    } catch (error) {
      console.error("Error in fethinng the products", error);
    }
  };

  function render() {
    const productContainer = document.createElement("div");
    productContainer.classList.add("products");

    if (products.length > 0) {
      products.slice(page * 10 - 10, page * 10).forEach((prod) => {
        const productElelement = document.createElement("div");
        productElelement.classList.add("products__single");
        productElelement.innerHTML = `
        <img src="${prod.thumbnail}" alt="${prod.title}"/>
        <span>${prod.title}</span>
        `;
        productContainer.appendChild(productElelement);
      });
    }
    app.appendChild(productContainer);
  }
  fetchProducts();
});
