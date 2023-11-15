let cartCount = 0;

 export function buyProduct(productId) {
   
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    console.log(`Producto ${productId} agregado al carrito.`);
}

export function toggleCart() {
    
    let cartSection = document.getElementById('cart');
    cartSection.style.display = (cartSection.style.display === 'block') ? 'none' : 'block';
}

export function showCheckout() {
   
    document.getElementById('cart').style.display = 'none';
    document.getElementById('checkout').style.display = 'block';
}