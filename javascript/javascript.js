// Select the scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Check if the scroll position is greater than 100px
  if (window.scrollY > 100) {
    scrollTopBtn.style.display = 'block'; // Show the button
  } else {
    scrollTopBtn.style.display = 'none'; // Hide the button
  }
});

// Optional: Add functionality to scroll to the top when clicked
scrollTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


//Side Navigation Bar

const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', () => {
  sideNav.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  sideNav.classList.remove('open');
});