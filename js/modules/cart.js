
const cart = {
  items: [],

  addToCart: function (product) {
      this.items.push(product);
      updateCartCount();
      this.calculateTotal();
      updateCartDisplay();
      showAddedToCartMessage();
  },

  calculateTotal: function () {
      return this.items.reduce((total, item) => total + item.price, 0);
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

      const totalPriceContainer = document.getElementById('total-price');
      totalPriceContainer.textContent = `$${this.calculateTotal()}`;
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
  let productContainer = button.closest('.product-card');
  let productName = productContainer.querySelector('h3').innerText;
  let productPriceText = productContainer.querySelector('p').innerText;
  let productPrice = parseInt(productPriceText.replace("Precio: $", ""));

  const product = {
      name: productName,
      price: productPrice,
  };

  cart.addToCart(product);
}

function showAddedToCartMessage() {
  alert("Producto añadido al carrito");
}



