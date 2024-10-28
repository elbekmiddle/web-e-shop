// Add product to cart
function addToCart(product, price) {
  cart.push({ product, price });
  updateCart();
}

// Update cart display
function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItemsList = document.getElementById("cart-items-list");
  const totalPriceEl = document.getElementById("total-price");

  cartCount.innerText = cart.length;
  cartItemsList.innerHTML = "";
  totalPrice = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `${item.product} - $${item.price}`;
    cartItemsList.appendChild(li);
    totalPrice += item.price;
  });

  totalPriceEl.innerText = totalPrice.toFixed(2);
}

// Checkout button functionality
document.getElementById("checkout-btn").addEventListener("click", () => {
  alert("Thanks for your purchase!");
  cart = [];
  updateCart();
});

// Add product to cart
function addToCart(product, price) {
  cart.push({ product, price });
  updateCart();
}

// Update cart display
function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItemsList = document.getElementById("cart-items-list");
  const totalPriceEl = document.getElementById("total-price");

  cartCount.innerText = cart.length;
  cartItemsList.innerHTML = "";
  totalPrice = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `${item.product} - $${item.price}`;
    cartItemsList.appendChild(li);
    totalPrice += item.price;
  });

  totalPriceEl.innerText = totalPrice.toFixed(2);
}

// Checkout button functionality
document.getElementById("checkout-btn").addEventListener("click", () => {
  alert("Thanks for your purchase!");
  cart = [];
  updateCart();
});

// Clear Cart functionality
document.getElementById("clear-cart-btn").addEventListener("click", () => {
  cart = []; // Savatni bo'shatadi
  updateCart(); // Yangilab chiqaradi
});

// efsd
let cart = [];
let totalPrice = 0;

// Mahsulotni savatga qo'shish
function addToCart(product, price) {
  cart.push({ product, price });
  updateCart();
}

// Savatni yangilash funksiyasi
function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItemsList = document.getElementById("cart-items-list");
  const totalPriceEl = document.getElementById("total-price");

  cartCount.innerText = cart.length;
  cartItemsList.innerHTML = "";
  totalPrice = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `${item.product} - $${item.price}`;
    cartItemsList.appendChild(li);
    totalPrice += item.price;
  });

  totalPriceEl.innerText = totalPrice.toFixed(2);
}

// Savatni tozalash funksiyasi
function clearCart() {
  cart = [];
  updateCart();
}

// Sotib olish funksiyasi
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Admin serveriga ma'lumotlarni yuborish
  fetch("https://your-server-url.com/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cartItems: cart,
      totalPrice: totalPrice,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      alert("Thanks for your purchase!");
      cart = [];
      updateCart();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// "Checkout" tugmasi funksiyasi
document.getElementById("checkout-btn").addEventListener("click", () => {
  checkout();
});

// "Savatni tozalash" tugmasi funksiyasi
document.getElementById("clear-cart-btn").addEventListener("click", () => {
  clearCart();
});
