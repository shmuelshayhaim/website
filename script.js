let cart = [];

function addToCart(productId) {
    const product = { id: productId, name: `מוצר ${productId}`, price: productId * 100 };
    cart.push(product);
    alert(`${product.name} נוסף לעגלה`);
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    const totalPriceSpan = document.getElementById('totalPrice');
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        cartItemsDiv.innerHTML += `<p>${item.name} - ₪${item.price}</p>`;
        total += item.price;
    });

    totalPriceSpan.textContent = `₪${total}`;
}

function checkout() {
    alert('תודה על הרכישה! התשלום עבר בהצלחה.');
    cart = [];
    updateCart();
}

// עדכון העגלה כאשר טוענים את דף התשלום
if (document.getElementById('cartItems')) {
    updateCart();
}
