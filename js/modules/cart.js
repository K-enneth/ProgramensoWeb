const cart = {
    items: [],
  
    addToCart: function (productId) {
      const product = {
        id: productId,
        name: `Producto ${productId}`,
        price: 1000,
      };
  
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
  
  function toggleCart() {
    console.log("Carrito clickeado");
  }
  
  function buyProduct(productId) {
    console.log("Producto comprado: " + productId);
    cart.addToCart(productId);
  }
  
  function showCheckout() {
    console.log("Mostrar pantalla de pago");
  }
  
  function showAddedToCartMessage() {
    alert("Producto añadido al carrito");
  }
  