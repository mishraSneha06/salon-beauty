//modal element
window.onload = function () {
    // Get the modal element
    const modal = document.getElementById('modal');
    
    // Get the close button
    const closeBtn = document.querySelector('.close-btn');
  
    // Function to open modal after 5 seconds
    setTimeout(function () {
      modal.style.display = 'block';
    }, 5000); // 5000 milliseconds = 5 seconds
  
    // Close the modal when the close button is clicked
    closeBtn.onclick = function () {
      modal.style.display = 'none';
    }
  
    // Close the modal if the user clicks anywhere outside of it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  };

  //REVIEWS SECTION
  document.addEventListener("DOMContentLoaded", function() {
    const reviews = document.querySelectorAll('.review');
    let currentIndex = 0;
    let autoScrollInterval;

    function showReview(index) {
        // Hide all reviews
        reviews.forEach(review => review.classList.remove('active'));
        
        // Show the selected review
        reviews[index].classList.add('active');
    }

    function nextReview() {
        currentIndex = (currentIndex + 1) % reviews.length;
        showReview(currentIndex);
    }

    function prevReview() {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        showReview(currentIndex);
    }

    function startAutoScroll() {
        autoScrollInterval = setInterval(nextReview, 3000); // 3 seconds interval
    }
        

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }
        

    // Event listeners for manual navigation
    document.getElementById('next').addEventListener('click', () => {
        stopAutoScroll();
        nextReview();
        startAutoScroll(); // Restart auto-scroll after manual navigation
    });

    document.getElementById('prev').addEventListener('click', () => {
        stopAutoScroll();
        prevReview();
        startAutoScroll();
    });

    // Initialize the slider
    showReview(currentIndex);
    startAutoScroll();
});

  