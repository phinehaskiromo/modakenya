// Sample product details
const product = {
  name: "Men's Trousers",
  price: 2000
};

// Function to add product to cart
function addToCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems.push(product);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  alert("Item added to cart!");
  window.location.href = 'cart.html'; // Redirect to cart page
}

// Function to display cart items on the cart page
function displayCartItems() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsDiv = document.getElementById('cart-items');
  
  if (cartItems.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartItemsDiv.innerHTML = "<h3>Cart Items:</h3>";
  cartItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.textContent = `${item.name} - Ksh ${item.price}`;
    cartItemsDiv.appendChild(itemDiv);
  });
}

// Call the displayCartItems function when the cart page loads
window.onload = displayCartItems;
