


 function toggleCart() {
    
    console.log("Carrito clickeado");
}


 function buyProduct(productId) {
   
    console.log("Producto comprado: " + productId);
}


 function showCheckout() {

    console.log("Mostrar pantalla de pago");
}

document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById('cart').addEventListener('click', toggleCart);


    var productButtons = document.querySelectorAll('.product-card button');
    productButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            buyProduct(index + 1);
        });
    });

    document.getElementById('checkout-btn').addEventListener('click', showCheckout);
});
