// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Hero Slider
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;
const totalSlides = slides.length;

// Initialize slider
function initSlider() {
    slides[0].classList.add('active');
    dots[0].classList.add('active');
    
    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// Go to specific slide
function goToSlide(n) {
    // Reset all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Update current slide index
    currentSlide = (n + totalSlides) % totalSlides;
    
    // Activate current slide and dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Next slide
function nextSlide() {
    goToSlide(currentSlide + 1);
}

// Previous slide
function prevSlide() {
    goToSlide(currentSlide - 1);
}

// Event listeners for slider controls
if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
}

// Event listeners for dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        // In a real implementation, you would send this data to a server
        // For now, we'll show a success message
        alert(`Thank you, ${name}! Your message has been received. We will contact you at ${phone} within 24 hours.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Active Navigation Link Highlighting
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        // Remove active class from all links
        link.classList.remove('active');
        
        // Check if this link corresponds to current page
        const linkHref = link.getAttribute('href');
        
        if (currentPage === linkHref) {
            link.classList.add('active');
        } else if (currentPage === '' && linkHref === 'index.html') {
            // Special case for home page (index.html)
            link.classList.add('active');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize slider on home page
    if (document.querySelector('.hero-slider')) {
        initSlider();
    }
    
    // Set active navigation link
    setActiveNavLink();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add placeholder images if actual images are missing
    const placeholders = document.querySelectorAll('.image-placeholder');
    placeholders.forEach(placeholder => {
        if (!placeholder.querySelector('img')) {
            placeholder.innerHTML = `
                <i class="fas fa-image"></i>
                <p>Company Image</p>
                <small>Replace with your image</small>
            `;
        }
    });
});

// Add loading animation for service cards
window.addEventListener('load', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Set initial state for animation
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});
// Gallery Data - 20 Images with Categories
const galleryImages = [
    { id: 1, src: 'images/gallery/installation1.jpg', title: 'Commercial AC Installation', category: 'installation', desc: 'Large-scale commercial HVAC installation' },
    { id: 2, src: 'images/gallery/repair1.jpg', title: 'AC Unit Repair', category: 'repair', desc: 'Diagnosing and repairing faulty compressor' },
    { id: 3, src: 'images/gallery/maintenance1.jpg', title: 'Regular Maintenance', category: 'maintenance', desc: 'Preventive maintenance check' },
    { id: 4, src: 'images/gallery/installation2.jpg', title: 'Residential Installation', category: 'installation', desc: 'Split system installation in home' },
    { id: 5, src: 'images/gallery/commercial1.jpg', title: 'Office Building HVAC', category: 'commercial', desc: 'Complete office building climate control' },
    { id: 6, src: 'images/gallery/residential1.jpg', title: 'Home AC Setup', category: 'residential', desc: 'Residential air conditioning system' },
    { id: 7, src: 'images/gallery/repair2.jpg', title: 'Emergency Repair', category: 'repair', desc: '24/7 emergency repair service' },
    { id: 8, src: 'images/gallery/maintenance2.jpg', title: 'System Tune-up', category: 'maintenance', desc: 'Seasonal AC tune-up' },
    { id: 9, src: 'images/gallery/installation3.jpg', title: 'Ductwork Installation', category: 'installation', desc: 'Professional ductwork setup' },
    { id: 10, src: 'images/gallery/commercial2.jpg', title: 'Retail Store AC', category: 'commercial', desc: 'Shopping center HVAC system' },
    { id: 11, src: 'images/gallery/residential2.jpg', title: 'Apartment Cooling', category: 'residential', desc: 'Multi-unit residential cooling' },
    { id: 12, src: 'images/gallery/repair3.jpg', title: 'Component Replacement', category: 'repair', desc: 'Replacing damaged components' },
    { id: 13, src: 'images/gallery/maintenance3.jpg', title: 'Filter Replacement', category: 'maintenance', desc: 'Regular filter maintenance' },
    { id: 14, src: 'images/gallery/installation4.jpg', title: 'New Construction', category: 'installation', desc: 'HVAC for new building' },
    { id: 15, src: 'images/gallery/commercial3.jpg', title: 'Warehouse Cooling', category: 'commercial', desc: 'Industrial warehouse climate control' },
    { id: 16, src: 'images/gallery/residential3.jpg', title: 'Villa AC System', category: 'residential', desc: 'Luxury villa installation' },
    { id: 17, src: 'images/gallery/repair4.jpg', title: 'Electrical Repair', category: 'repair', desc: 'Fixing electrical issues' },
    { id: 18, src: 'images/gallery/maintenance4.jpg', title: 'Cleaning Service', category: 'maintenance', desc: 'Deep cleaning AC units' },
    { id: 19, src: 'images/gallery/installation5.jpg', title: 'Multi-Split System', category: 'installation', desc: 'Advanced multi-split installation' },
    { id: 20, src: 'images/gallery/commercial4.jpg', title: 'Hotel HVAC', category: 'commercial', desc: 'Hotel climate control system' }
];

// For placeholder images (if you don't have actual images yet)
const placeholderImages = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    src: `https://images.unsplash.com/photo-${1581094794 + i}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`,
    title: `HVAC Project ${i + 1}`,
    category: ['installation', 'repair', 'maintenance', 'commercial', 'residential'][i % 5],
    desc: `Professional HVAC work example ${i + 1}`
}));

// Function to render gallery
function renderGallery(containerId, images, limit = 6) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const imagesToShow = limit ? images.slice(0, limit) : images;
    
    container.innerHTML = imagesToShow.map(image => `
        <div class="gallery-item" data-id="${image.id}" data-category="${image.category}">
            <img src="${image.src}" alt="${image.title}" onerror="this.src='https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'">
            <div class="gallery-item-overlay">
                <h4>${image.title}</h4>
                <p>${image.desc}</p>
            </div>
        </div>
    `).join('');
    
    // Add click event to gallery items
    container.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const id = parseInt(item.dataset.id);
            openLightbox(id, images);
        });
    });
}

// Lightbox functionality
let currentLightboxIndex = 0;
let currentLightboxImages = [];

function openLightbox(id, images) {
    currentLightboxImages = images;
    currentLightboxIndex = images.findIndex(img => img.id === id);
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    
    if (currentLightboxIndex >= 0) {
        const image = images[currentLightboxIndex];
        lightboxImg.src = image.src;
        lightboxTitle.textContent = image.title;
        lightboxDesc.textContent = image.desc;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function navigateLightbox(direction) {
    currentLightboxIndex = (currentLightboxIndex + direction + currentLightboxImages.length) % currentLightboxImages.length;
    const image = currentLightboxImages[currentLightboxIndex];
    
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    
    lightboxImg.src = image.src;
    lightboxTitle.textContent = image.title;
    lightboxDesc.textContent = image.desc;
}

// Filter gallery
function setupGalleryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryGrid = document.getElementById('full-gallery');
    
    if (!filterBtns.length || !galleryGrid) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            const items = galleryGrid.querySelectorAll('.gallery-item');
            
            items.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // ... (keep existing code) ...
    
    // Initialize galleries
    if (document.getElementById('gallery-grid')) {
        renderGallery('gallery-grid', placeholderImages, 6);
        
        // Load more button
        const loadMoreBtn = document.getElementById('load-more');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                renderGallery('gallery-grid', placeholderImages, 12);
                loadMoreBtn.style.display = 'none';
            });
        }
        
        // View all button
        const viewAllBtn = document.getElementById('view-all');
        if (viewAllBtn) {
            viewAllBtn.addEventListener('click', () => {
                window.location.href = 'gallery.html';
            });
        }
    }
    
    // Full gallery page
    if (document.getElementById('full-gallery')) {
        renderGallery('full-gallery', placeholderImages);
        setupGalleryFilters();
    }
    
    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        // Close lightbox
        const closeBtn = lightbox.querySelector('.close-lightbox');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }
        
        // Close when clicking outside image
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        // Navigation buttons
        const prevBtn = lightbox.querySelector('.prev');
        const nextBtn = lightbox.querySelector('.next');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => navigateLightbox(-1));
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => navigateLightbox(1));
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (lightbox.classList.contains('active')) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowLeft') navigateLightbox(-1);
                if (e.key === 'ArrowRight') navigateLightbox(1);
            }
        });
    }
});