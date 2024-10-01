document.addEventListener("DOMContentLoaded", function() {
    const cart = [];
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Function to update the cart UI
    function updateCart() {
        cartItemsElement.innerHTML = ''; // Clear the cart display
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            cartItemsElement.appendChild(li);
            total += item.price;
        });

        cartTotalElement.textContent = total.toFixed(2);
    }

    // Function to add items to the cart
    function addToCart(name, price) {
        cart.push({ name, price });
        updateCart();
    }

    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            addToCart(name, price);
        });
    });

    // Checkout button
    document.getElementById('checkout').addEventListener('click', function() {
        if (cart.length > 0) {
            alert('Thank you for your purchase!');
            cart.length = 0; // Clear the cart
            updateCart();
        } else {
            alert('Your cart is empty!');
        }
    });
});
