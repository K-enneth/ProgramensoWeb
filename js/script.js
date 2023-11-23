import {app} from "./modules/firebaseConfig.js";
import { firebaseCRUD } from "./modules/firebaseDataBase.js";
import { authEmail } from "./modules/firebaseAuthEmail.js";
import { authGoogle } from "./modules/firebaseAuthGoogle.js";


authEmail(app);

document.querySelector ("#show-signin").addEventListener("click", function(){
  document.querySelector("#signin").classList.add("active");
});

document.querySelector ("#signin #close-signin").addEventListener("click", function(){
  document.querySelector("#signin").classList.remove("active");
});

document.querySelector ("#show-login").addEventListener("click", function(){
  document.querySelector("#login").classList.add("active");
});

document.querySelector ("#login #close-login").addEventListener("click", function(){
  document.querySelector("#login").classList.remove("active");
});

document.addEventListener('DOMContentLoaded', function () {
    // Recuperar los elementos guardados en localStorage al cargar la página
    cart.items = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    document.getElementById('cart').addEventListener('click', function () {
      toggleCartSection();
    });
  
    var productButtons = document.querySelectorAll('.product-card button.add-to-cart-btn');
    productButtons.forEach(function (button, index) {
      button.addEventListener('click', function () {
        buyProduct(index + 1);
      });
    });
  
    document.getElementById('checkout-btn').addEventListener('click', function () {
      showCheckout();
      cart.showCart();
    });
  
    // Mostrar el carrito al cargar la página
    updateCartDisplay();
  });
  
  function toggleCartSection() {
    const cartSection = document.getElementById('cart');
    const cartItemsSection = document.getElementById('cart-items-section');
  
    if (cartItemsSection.style.display === 'block') {
      cartItemsSection.style.display = 'none';
    } else {
      cartItemsSection.style.display = 'block';
      cart.showCart();
    }
  }
  
  function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cart.showCart();
    // Guardar los elementos del carrito en localStorage
    localStorage.setItem('cartItems', JSON.stringify(cart.items));
  }
  