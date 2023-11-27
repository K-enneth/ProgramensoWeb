
const cart = {
  items: [],

  addToCart: function (product) {
      this.items.push(product);
      updateCartCount();
      updateCartDisplay();
      showAddedToCartMessage();
  },

  showCart: function () {
      const cartItemsContainer = document.getElementById('cart-items');
      cartItemsContainer.innerHTML = '';

      if (this.items.length === 0) {
          cartItemsContainer.innerHTML = '<p>El carrito está vacío.</p>';
      } else {
          this.items.forEach((item) => {
              const cartItem = document.createElement('div');
              cartItem.innerHTML = `<p>${item.name} - $${item.price}</p>`;
              cartItemsContainer.appendChild(cartItem);
          });
      }
  },
};

function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cart.items.length;
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cart-items');
  cart.showCart();
}

function buyProduct(button) {
  // Obtener el contenedor del producto
  let productContainer = button.closest('.product-card');

  // Obtener el nombre y otros detalles del producto desde el contenedor
  let productName = productContainer.querySelector('h3').innerText;
  let productPriceText = productContainer.querySelector('p').innerText;
  
  // Extraer el precio numérico del texto (por ejemplo, "Precio: $1000" -> 1000)
  let productPrice = parseInt(productPriceText.replace("Precio: $", ""));

  // Crear un objeto de producto
  const product = {
      name: productName,
      price: productPrice,
  };

  // Añadir el producto al carrito
  cart.addToCart(product);
  
  // Mostrar el mensaje de producto añadido al carrito
  showAddedToCartMessage();
}

function showAddedToCartMessage() {
  alert("Producto añadido al carrito");
}

// Resto del código según tus necesidades, como la inicialización de Firebase y el manejo de eventos DOM.

  