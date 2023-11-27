
paypal.Buttons({
    createOrder: function(data, actions) {
         // Lógica para crear la orden de pago
        return actions.order.create({
            purchase_units: [{
            amount: {
                  value: '0.01' // Monto de la transacción
            }
            }]
        });
    },
    onApprove: function(data, actions) {
         // Lógica cuando la transacción se aprueba
        return actions.order.capture().then(function(details) {
            // Lógica adicional después de la captura de la transacción
            alert('Transacción completada por ' + details.payer.name.given_name);
        });
    }
}).render('#paypal-button-container');
