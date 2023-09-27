// ...

// Função para calcular o total dos produtos no carrinho
function calculateTotal() {
  const cartItems = getCartItems();
  let total = 0;

  cartItems.forEach((item) => {
    total += item.price;
  });

  return total.toFixed(2);
}

// Atualize a função displayCart() para calcular e exibir o total
function displayCart() {
  const cartItems = getCartItems();
  const cartList = document.querySelector(".cart-list");
  const totalElement = document.getElementById("total");

  if (cartItems.length === 0) {
    cartList.innerHTML = "<p>O seu carrinho está vazio.</p>";
  } else {
    cartList.innerHTML = "";
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
  }

  // Calcular e exibir o total
  const total = calculateTotal();
  totalElement.textContent = total;
}

// ...

// Adicione um evento de envio para o formulário
const checkoutForm = document.getElementById("checkoutForm");
checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;

  // Aqui, você pode enviar os dados para o servidor ou fazer o que for necessário com as informações pessoais e o carrinho de compras.
});

// ...
