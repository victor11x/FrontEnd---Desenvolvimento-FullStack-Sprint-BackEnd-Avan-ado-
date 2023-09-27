const productList = document.querySelector(".product-list");
// const goToCartButton = document.getElementById("goToCart");

// Função para buscar os produtos da API
async function getProducts() {
  try {
    let url = "https://fakestoreapi.com/products";
    const response = await fetch(url, {
      method: "get",
    });
    const products = await response.json();

    // Exibir a lista de produtos
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
                <img src="${product.image}" >
                <h3>${product.title}</h3>
                <p>Preço: $${product.price}</p>
                <button class="addToCart">Comprar</button>
            `;

      productDiv.querySelector(".addToCart").addEventListener("click", () => {
        addToCart(product);
      });

      productList.appendChild(productDiv);
    });
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
  }
}

//

const insertCard = (product) => {
  var section = document.getElementById("products-list");
  let article = document.createElement("article");
  article.setAttribute("class", "product");
  article.setAttribute("id", product.id);

  let img = document.createElement("img");
  img.setAttribute("src", product.image);
  img.setAttribute("alt", "Não foi possível carregar a imagem do produto");

  let h3 = document.createElement("h3");
  h3.setAttribute("class", "price-product");
  let span = document.createElement("span");
  span.innerHTML = "R$ " + product.price;
  h3.appendChild(span);

  let p = document.createElement("p");
  p.setAttribute("class", "name-product");
  p.innerHTML = product.title;
  article.appendChild(img);
  article.appendChild(h3);
  article.appendChild(p);
  article.appendChild(button);
  section.appendChild(article);
};
//

// Função para adicionar um produto ao carrinho
function addToCart(product) {
  // Armazenar o produto no localStorage ou em algum lugar
  // Neste exemplo, usaremos o localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Produto adicionado ao carrinho!");
}

// Redirecionar para a página de compras ao clicar no botão "Ir para o Carrinho"
// goToCartButton.addEventListener("click", () => {
//   window.location.href = "compra.html";
// }
// Carregar a lista de produtos quando a página carregar
getProducts();
