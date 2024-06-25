let currentSlide = 0;
const slides = Array.from(document.querySelectorAll('.slide'));

// Function to shuffle an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the slides array
shuffle(slides);

// Reorder slides in the DOM
const slideshowContainer = document.querySelector('.slideshow-container');
slides.forEach(slide => slideshowContainer.appendChild(slide));

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.querySelector('.slideshow-container').addEventListener('click', (event) => {
  const rect = event.target.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  if (clickX > rect.width / 2) {
    nextSlide();
  } else {
    prevSlide();
  }
});

// Add keyboard controls
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    nextSlide();
  } else if (event.key === 'ArrowLeft') {
    prevSlide();
  }
});

// Add mouse scroll controls
document.querySelector('.slideshow-container').addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    nextSlide();
  } else {
    prevSlide();
  }
});

// Initialize the first slide
showSlide(currentSlide);

//


// Show overlay when clicking on "June Lihua Yu"
  const juneLihuaYuLink = document.querySelector('.info a');
  const overlay = document.getElementById('overlay');

  juneLihuaYuLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Display the overlay
    overlay.classList.add('active');

    // Prevent scrolling on the background
    document.body.style.overflow = 'hidden';
  });

  // Hide overlay when clicking anywhere on the screen
  overlay.addEventListener('click', () => {
    overlay.classList.remove('active');

    // Allow scrolling on the background
    document.body.style.overflow = 'auto';
  });
