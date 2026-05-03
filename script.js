// script.js - Complete JavaScript with 6 products per category
(function() {
    // Product Database - 6 products per category
    const products = {
        'tank-tops': [
            { id: 'tank1', name: 'Classic Ribbed Tank', brand: 'Essential Basics', price: 349, sizes: ['S', 'M', 'L', 'XL'], image: 'images/T1.png', description: 'Soft, stretchy ribbed fabric that hugs your curves. Perfect for layering or wearing solo.' },
            { id: 'tank2', name: 'TV GIRL★ Graphic Tank', brand: 'TV GIRL★', price: 399, sizes: ['S', 'M', 'L', 'XL'], image: 'images/T2.png', description: 'Bold graphic design meets comfort. Made from premium cotton blend.' },
            { id: 'tank3', name: 'Oversized Muscle Tank', brand: 'Street Style', price: 429, sizes: ['S', 'M', 'L', 'XL'], image: 'images/T3.png', description: 'Relaxed fit with dropped armholes. Effortless streetwear vibe.' },
            { id: 'tank4', name: 'Cropped Tank Top', brand: 'Y2K Revival', price: 299, sizes: ['S', 'M', 'L'], image: 'images/T4.png', description: 'Trendy cropped length. Perfect for high-waisted bottoms.' },
            { id: 'tank5', name: 'Linen Blend Tank', brand: 'Summer Essentials', price: 379, sizes: ['S', 'M', 'L', 'XL'], image: 'images/T5.png', description: 'Breathable linen blend for hot days. Lightweight and airy.' },
            { id: 'tank6', name: 'Seamless Workout Tank', brand: 'Active Core', price: 459, sizes: ['S', 'M', 'L'], image: 'images/T6.png', description: 'Moisture-wicking fabric. Perfect for gym or casual wear.' }
        ],
        'long-sleeves': [
            { id: 'long1', name: 'Essential Crewneck', brand: 'Classics', price: 499, sizes: ['S', 'M', 'L', 'XL'], image: 'images/LS1.png', description: 'Timeless crewneck design. Soft cotton blend for all-day comfort.' },
            { id: 'long2', name: 'Striped Long Sleeve', brand: 'Nautical', price: 549, sizes: ['S', 'M', 'L', 'XL'], image: 'images/LS2.png', description: 'Classic stripe pattern. Perfect for casual outings.' },
            { id: 'long3', name: 'Mock Neck Top', brand: 'Modern Fit', price: 599, sizes: ['S', 'M', 'L'], image: 'images/LS3.png', description: 'Elegant mock neck design. Stretchy ribbed fabric.' },
            { id: 'long4', name: 'Thermal Long Sleeve', brand: 'Winter Edit', price: 649, sizes: ['S', 'M', 'L', 'XL'], image: 'images/LS4.png', description: 'Warm thermal fabric. Perfect for cooler days.' },
            { id: 'long5', name: 'Oversized Button Up', brand: 'Street Luxe', price: 699, sizes: ['S', 'M', 'L', 'XL'], image: 'images/LS5.png', description: 'Relaxed fit with button front. Versatile layering piece.' },
            { id: 'long6', name: 'Turtleneck Slim Fit', brand: 'Elegant', price: 579, sizes: ['S', 'M', 'L'], image: 'images/LS6.png', description: 'Sleek turtleneck design. Perfect for sophisticated looks.' }
        ],
        'jeans': [
            { id: 'jean1', name: 'Classic Straight Jeans', brand: 'Denim Heritage', price: 599, sizes: ['28', '30', '32', '34'], image: 'images/J1.png', description: 'Timeless straight leg cut. Premium denim with slight stretch.' },
            { id: 'jean2', name: 'Slim Fit Jeans', brand: 'Modern Denim', price: 699, sizes: ['28', '30', '32', '34'], image: 'images/J2.png', description: 'Sleek slim fit. Comfortable stretch denim.' },
            { id: 'jean3', name: 'Wide Leg Jeans', brand: 'Baggy Style', price: 749, sizes: ['S', 'M', 'L', 'XL'], image: 'images/J3.png', description: 'Trendy wide-leg silhouette. Relaxed comfortable fit.' },
            { id: 'jean4', name: 'High Rise Skinny', brand: 'Curve Love', price: 649, sizes: ['24', '26', '28', '30'], image: 'images/J4.png', description: 'Flattering high-rise fit. Hugs your curves perfectly.' },
            { id: 'jean5', name: 'Distressed Boyfriend', brand: 'Street Denim', price: 799, sizes: ['S', 'M', 'L'], image: 'images/J5.png', description: 'Edgy distressed details. Relaxed boyfriend fit.' },
            { id: 'jean6', name: 'Cargo Denim Pants', brand: 'Utility Style', price: 899, sizes: ['S', 'M', 'L', 'XL'], image: 'images/J6.png', description: 'Functional cargo pockets. Trendy utility aesthetic.' }
        ],
        'jorts': [
            { id: 'jort1', name: 'Classic Denim Shorts', brand: 'Summer Essential', price: 500, sizes: ['S', 'M', 'L', 'XL'], image: 'images/JRT1.png', description: 'Essential denim shorts. Perfect for warm weather.' },
            { id: 'jort2', name: 'Distressed Jorts', brand: 'Edgy Style', price: 550, sizes: ['S', 'M', 'L', 'XL'], image: 'images/JRT2.png', description: 'Trendy distressed finish. Adds character to any outfit.' },
            { id: 'jort3', name: 'High Rise Jorts', brand: 'Retro Fit', price: 579, sizes: ['S', 'M', 'L'], image: 'images/JRT3.png', description: 'Flattering high-rise cut. Vintage-inspired style.' },
            { id: 'jort4', name: 'Cuffed Denim Shorts', brand: 'Preppy Style', price: 529, sizes: ['S', 'M', 'L', 'XL'], image: 'images/JRT4.png', description: 'Rolled cuff detail. Clean preppy aesthetic.' },
            { id: 'jort5', name: 'Paperbag Waist Jorts', brand: 'Chic Style', price: 599, sizes: ['S', 'M', 'L'], image: 'images/JRT5.png', description: 'Trendy paperbag waist. Adjustable fit.' },
            { id: 'jort6', name: 'Frayed Hem Shorts', brand: 'Boho Style', price: 549, sizes: ['S', 'M', 'L', 'XL'], image: 'images/JRT6.png', description: 'Frayed hem detail. Casual bohemian vibe.' }
        ],
        'shirt': [
            { id: 'shirt1', name: 'Classic Oxford Shirt', brand: 'Timeless', price: 250, sizes: ['S', 'M', 'L', 'XL'], image: 'images/ST1.png', description: 'Essential Oxford shirt. Versatile wardrobe staple.' },
            { id: 'shirt2', name: 'Linen Button Up', brand: 'Summer Breeze', price: 399, sizes: ['S', 'M', 'L', 'XL'], image: 'images/ST2.png', description: 'Breathable linen fabric. Perfect for hot days.' },
            { id: 'shirt3', name: 'Oversized Denim Shirt', brand: 'Street Style', price: 449, sizes: ['S', 'M', 'L'], image: 'images/ST3.png', description: 'Relaxed denim shirt. Great for layering.' },
            { id: 'shirt4', name: 'Silk Satin Blouse', brand: 'Luxe Edit', price: 599, sizes: ['S', 'M', 'L'], image: 'images/ST6.png', description: 'Elegant silk finish. Perfect for special occasions.' },
            { id: 'shirt5', name: 'Flannel Plaid Shirt', brand: 'Cozy Style', price: 379, sizes: ['S', 'M', 'L', 'XL'], image: 'images/ST5.png', description: 'Warm flannel fabric. Classic plaid pattern.' },
            { id: 'shirt6', name: 'Cropped Button Up', brand: 'Y2K Revival', price: 329, sizes: ['S', 'M', 'L'], image: 'images/ST6.png', description: 'Trendy cropped length. Modern silhouette.' }
        ]
    };

    // Cart State
    let cart = [];
    let currentCategory = 'all';
    let selectedSize = null;
    let currentProduct = null;

    // DOM Elements
    const productsGrid = document.getElementById('productsGrid');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const currentCategoryName = document.getElementById('currentCategoryName');
    const itemCountSpan = document.getElementById('itemCount');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartIconBtn = document.getElementById('cartIconBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalPrice = document.getElementById('cartTotalPrice');
    const cartCountSpan = document.getElementById('cartCount');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const productModal = document.getElementById('productModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalAddToCart = document.getElementById('modalAddToCart');
    const exploreBtn = document.getElementById('exploreBtn');

    // Render products based on category
    function renderProducts() {
        let productsToShow = [];
        
        if (currentCategory === 'all') {
            productsToShow = [
                ...products['tank-tops'],
                ...products['long-sleeves'],
                ...products['jeans'],
                ...products['jorts'],
                ...products['shirt']
            ];
        } else {
            productsToShow = products[currentCategory] || [];
        }
        
        itemCountSpan.textContent = `(${productsToShow.length} items)`;
        currentCategoryName.textContent = currentCategory === 'all' ? 'All Items' : currentCategory.replace('-', ' ').toUpperCase();
        
        productsGrid.innerHTML = productsToShow.map(product => `
            <div class="product-card" data-category="${currentCategory}" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" class="product-img">
                    <div class="product-overlay">
                        <span class="quick-view">Quick View</span>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-badge">NEW</div>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-brand">${product.brand}</p>
                    <div class="product-price">₱${product.price}</div>
                    <div class="product-sizes">
                        ${product.sizes.map(size => `<span>${size}</span>`).join('')}
                    </div>
                    <button class="add-to-cart-btn" data-product='${JSON.stringify(product)}'>
                        <i class="fa-solid fa-bag-shopping"></i> Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
        
        attachProductEvents();
    }

// Magazine Carousel Functionality - Add to existing js.js

// Magazine Carousel Navigation
let currentMagazineIndex = 0;
const magazineCards = document.querySelectorAll('.magazine-card');
const magazinePrev = document.getElementById('magazinePrev');
const magazineNext = document.getElementById('magazineNext');

function updateMagazineCarousel() {
    if (!magazineCards.length) return;
    
    const cardsPerView = window.innerWidth >= 1024 ? 3 : (window.innerWidth >= 640 ? 2 : 1);
    const maxIndex = Math.max(0, magazineCards.length - cardsPerView);
    
    if (currentMagazineIndex > maxIndex) currentMagazineIndex = maxIndex;
    if (currentMagazineIndex < 0) currentMagazineIndex = 0;
    
    magazineCards.forEach((card, index) => {
        if (index >= currentMagazineIndex && index < currentMagazineIndex + cardsPerView) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

if (magazinePrev && magazineNext) {
    magazinePrev.addEventListener('click', () => {
        const cardsPerView = window.innerWidth >= 1024 ? 3 : (window.innerWidth >= 640 ? 2 : 1);
        if (currentMagazineIndex > 0) {
            currentMagazineIndex--;
            updateMagazineCarousel();
        }
    });
    
    magazineNext.addEventListener('click', () => {
        const cardsPerView = window.innerWidth >= 1024 ? 3 : (window.innerWidth >= 640 ? 2 : 1);
        if (currentMagazineIndex < magazineCards.length - cardsPerView) {
            currentMagazineIndex++;
            updateMagazineCarousel();
        }
    });
}

// Magazine Card Click Handler
document.querySelectorAll('.magazine-card, .magazine-read-more').forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        const card = element.closest('.magazine-card');
        if (card) {
            const title = card.querySelector('.magazine-card-title')?.textContent || 'Style Story';
            const desc = card.querySelector('.magazine-card-desc')?.textContent || '';
            showToast(`📖 Opening: ${title}`);
        }
    });
});

// Update carousel on window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        updateMagazineCarousel();
    }, 250);
});

// Initialize carousel
setTimeout(() => {
    updateMagazineCarousel();
}, 100);

    function attachProductEvents() {
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('.add-to-cart-btn') || e.target.closest('.product-sizes span')) return;
                const productId = card.dataset.productId;
                const category = card.dataset.category;
                const product = products[category]?.find(p => p.id === productId);
                if (product) openModal(product);
            });
        });
        
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const product = JSON.parse(btn.dataset.product);
                addToCart(product);
            });
        });
        
        document.querySelectorAll('.product-sizes span').forEach(sizeSpan => {
            sizeSpan.addEventListener('click', (e) => {
                e.stopPropagation();
                const size = sizeSpan.textContent;
                showToast(`Size ${size} selected`);
            });
        });
    }

    function openModal(product) {
        currentProduct = product;
        document.getElementById('modalProductImage').src = product.image;
        document.getElementById('modalProductName').textContent = product.name;
        document.getElementById('modalCategory').textContent = product.brand;
        document.getElementById('modalPrice').textContent = `₱${product.price}`;
        document.getElementById('modalDescription').textContent = product.description;
        
        const sizeOptions = document.getElementById('modalSizeOptions');
        sizeOptions.innerHTML = product.sizes.map(size => `
            <div class="size-option" data-size="${size}">${size}</div>
        `).join('');
        
        document.querySelectorAll('.size-option').forEach(opt => {
            opt.addEventListener('click', () => {
                document.querySelectorAll('.size-option').forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
                selectedSize = opt.dataset.size;
            });
        });
        
        selectedSize = null;
        productModal.classList.add('active');
    }

    function addToCart(product, size = null) {
        const finalSize = size || 'M';
        const cartItem = {
            id: product.id,
            name: `${product.name} (${finalSize})`,
            price: product.price,
            quantity: 1,
            size: finalSize
        };
        
        const existingIndex = cart.findIndex(item => item.id === product.id && item.size === finalSize);
        if (existingIndex > -1) {
            cart[existingIndex].quantity++;
        } else {
            cart.push(cartItem);
        }
        
        saveCart();
        updateCartUI();
        showToast(`${product.name} added to cart!`);
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        saveCart();
        updateCartUI();
        showToast('Item removed from cart');
    }

    function updateCartUI() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountSpan.textContent = totalItems;
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<div class="empty-cart-message"><i class="fa-regular fa-bag-shopping"></i><p>Your cart is empty</p></div>`;
            cartTotalPrice.textContent = 'P0';
            return;
        }
        
        let itemsHtml = '';
        let total = 0;
        
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            itemsHtml += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${escapeHtml(item.name)}</h4>
                        <p>₱${item.price} x ${item.quantity}</p>
                    </div>
                    <button class="remove-item" data-index="${index}">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            `;
        });
        
        cartItemsContainer.innerHTML = itemsHtml;
        cartTotalPrice.textContent = `P${total}`;
        
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.dataset.index);
                removeFromCart(index);
            });
        });
    }

    function saveCart() {
        localStorage.setItem('nikofits_cart', JSON.stringify(cart));
    }

    function loadCart() {
        const saved = localStorage.getItem('nikofits_cart');
        if (saved) {
            cart = JSON.parse(saved);
            updateCartUI();
        }
    }

    function showToast(message) {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--primary-dark);
            color: white;
            padding: 0.8rem 1.8rem;
            border-radius: 50px;
            font-size: 0.9rem;
            z-index: 1001;
            animation: fadeInOut 2s ease forwards;
            pointer-events: none;
            font-family: 'Space Grotesk', sans-serif;
            white-space: nowrap;
            max-width: 90vw;
        `;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    }

    function escapeHtml(str) {
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }

    // Event Listeners
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderProducts();
        });
    });

    if (modalAddToCart) {
        modalAddToCart.addEventListener('click', () => {
            if (!selectedSize) {
                showToast('Please select a size');
                return;
            }
            if (currentProduct) {
                addToCart(currentProduct, selectedSize);
                productModal.classList.remove('active');
            }
        });
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', () => productModal.classList.remove('active'));
    }
    
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) productModal.classList.remove('active');
    });
    
    if (cartIconBtn) {
        cartIconBtn.addEventListener('click', () => cartSidebar.classList.add('open'));
    }
    
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => cartSidebar.classList.remove('open'));
    }
    
    document.addEventListener('click', (e) => {
        if (cartSidebar && cartSidebar.classList.contains('open')) {
            if (!cartSidebar.contains(e.target) && !cartIconBtn?.contains(e.target)) {
                cartSidebar.classList.remove('open');
            }
        }
    });
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showToast('Your cart is empty!');
                return;
            }
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            alert(`✨ Thank you for shopping!\n\nTotal: P${total}\n\nThis is a demo. For actual orders, contact us on social media.`);
            cart = [];
            saveCart();
            updateCartUI();
            cartSidebar.classList.remove('open');
        });
    }
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input').value;
        showToast(`Thanks for subscribing! We'll send updates to ${email}`);
        e.target.reset();
    });
    
    document.querySelectorAll('.social-links a, .footer-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showToast('Coming soon! Follow us on social media for updates.');
        });
    });


    
    loadCart();
    renderProducts();
})();

// ========== LOGOUT FUNCTION - SAME AS MAVI PETALS (WORKING) ==========

function logoutAndReturnToFileMaker() {
    // Show a quick confirmation
    showToast('Logging out... Redirecting to FileMaker', 2000);
    
    // Redirect to FileMaker login - USE THE SAME URL THAT WORKED BEFORE
    setTimeout(function() {
        window.location.href = 'fmp://$/ShowLogin';
    }, 500);
}

// Attach logout event to button
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        logoutAndReturnToFileMaker();
    });
}

