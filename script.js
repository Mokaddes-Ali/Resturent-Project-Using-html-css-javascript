// Toggle button functionality for mobile view
document.getElementById('toggle-button').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
    this.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Dropdown functionality for Menu and Services on Click
const menuItems = document.querySelectorAll('.nav-links li a');

menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior

        const dropdown = this.nextElementSibling; // Get the next sibling (dropdown menu)
        const isActive = dropdown && dropdown.style.display === 'block'; // Check if dropdown is already visible

        // Hide all other dropdowns
        document.querySelectorAll('.dropdown').forEach(drop => {
            drop.style.display = 'none';
        });

        // Toggle the current dropdown
        if (dropdown && !isActive) {
            dropdown.style.display = 'block'; // Show the dropdown if not already visible
        }
    });

    // Optional: Close the dropdown when clicking anywhere outside the menu
    document.addEventListener('click', function (event) {
        if (!item.contains(event.target)) {
            const dropdown = item.nextElementSibling;
            if (dropdown) dropdown.style.display = 'none';
        }
    });
});


// Search bar functionality
document.getElementById('search-icon').addEventListener('click', function () {
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.toggle('active');
});

// Add product to cart
const cartItems = [];
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const name = this.parentElement.getAttribute('data-name');
        const price = this.parentElement.getAttribute('data-price');
        cartItems.push({ name, price });
        updateCart();
    });
});

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cartItems.length;
    
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    cartItems.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(div);
    });
}

// Show/hide cart modal
document.getElementById('cart-icon').addEventListener('click', function () {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.toggle('active');
});

document.getElementById('close-cart').addEventListener('click', function () {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.remove('active');
});


// Adding hover animation through JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });
});


const cardsContainer = document.querySelector('.menu-cards');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let currentScrollPosition = 0;

nextBtn.addEventListener('click', () => {
    currentScrollPosition += 250; // Adjust this value based on card width
    cardsContainer.scrollTo({
        left: currentScrollPosition,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    currentScrollPosition -= 250;
    if (currentScrollPosition < 0) currentScrollPosition = 0;
    cardsContainer.scrollTo({
        left: currentScrollPosition,
        behavior: 'smooth'
    });
});