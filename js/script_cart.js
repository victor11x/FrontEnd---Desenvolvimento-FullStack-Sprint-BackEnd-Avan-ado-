// // Carregar e exibir os produtos no carrinho quando a página carregar
// displayCart();
const cartContainer = document.querySelector(".cart");

// Função para obter os produtos do carrinho
function getCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart;
}

// Função para exibir os produtos no carrinho
function displayCart() {
  const cartItems = getCartItems();

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>O seu carrinho está vazio.</p>";
    return;
  }

  const cartList = document.createElement("ul");
  cartList.classList.add("cart-list");

  cartItems.forEach((item) => {
    const cartItem = document.createElement("li");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}" width="100">
      <h3>${item.title}</h3>
      <p>Preço: $${item.price}</p>
    `;

    cartList.appendChild(cartItem);
  });

  cartContainer.appendChild(cartList);
}
// Função para limpar o carrinho
function clearCart() {
  const cartList = document.querySelector(".cart-list");
  while (cartList.firstChild) {
    cartList.removeChild(cartList.firstChild);
  }
}

// Evento de clique para o botão "Limpar Carrinho"
const clearCartButton = document.getElementById("clearCartButton");
clearCartButton.addEventListener("click", clearCart);

// Função para exibir o número de itens no carrinho
function displayItemCount() {
  const cartItems = getCartItems();
  const itemCountElement = document.getElementById("itemCount"); // Elemento onde você deseja exibir o número de itens

  // Obtém o número de itens no carrinho (com base no comprimento do array cartItems)
  const itemCount = cartItems.length;
  // Obtém o número de itens no carrinho (com base no comprimento do array cartItems)
  const itemSum = cartItems.sum;

  // Exibe o número de itens no elemento HTML
  itemCountElement.textContent = itemCount;
}

// Chame a função para exibir o número de itens no carrinho
displayItemCount();

// Carregar e exibir os produtos no carrinho quando a página carregar
displayCart();
