document.addEventListener("DOMContentLoaded", function() {
    // Get all the gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const caption = document.getElementById('caption');
    const close = document.querySelector('.close');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    let currentIndex = 0; // Track the currently open image

    // Function to open the lightbox
    function openLightbox(index) {
        lightbox.style.display = 'block';
        currentIndex = index;
        lightboxImage.src = galleryItems[currentIndex].src;
        caption.textContent = galleryItems[currentIndex].alt;
    }

    // Function to close the lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    // Function to show the previous image
    function showPrevImage() {
        currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
        openLightbox(currentIndex);
    }

    // Function to show the next image
    function showNextImage() {
        currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
        openLightbox(currentIndex);
    }

    // Event listeners for clicking on gallery items
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });

    // Event listener for closing the lightbox
    close.addEventListener('click', closeLightbox);

    // Event listeners for next/prev buttons
    prev.addEventListener('click', showPrevImage);
    next.addEventListener('click', showNextImage);

    // Close lightbox when clicking outside of the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target === lightboxImage) {
            closeLightbox();
        }
    });
});
