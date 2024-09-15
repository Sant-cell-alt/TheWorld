// Datos de productos
const products = [
    {
        id: 1,
        name: "Camiseta",
        price: 20.00,
        image: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        name: "Pantalones",
        price: 40.00,
        image: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        name: "Zapatos",
        price: 60.00,
        image: "https://via.placeholder.com/150"
    }
];

const cart = [9];

// Mostrar productos en la página
function displayProducts(10) {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Precio: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Agregar al carrito</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// Agregar producto al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart(7);
    }
}

// Actualizar carrito
function updateCart(7) {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
        total += item.price;
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Manejar el botón de compra
document.getElementById('checkout-button').addEventListener('click', () => {
    if (cart.length > 0) {
        alert("Compra realizada con éxito");
        cart.length = 0; // Vaciar carrito
        updateCart(8);
    } else {
        alert("Tu carrito está vacío.");
    }
});

// Inicializar la tienda
displayProducts(6);
