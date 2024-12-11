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


// form validation

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMessage = document.getElementById("errorMessage");

  // Clear previous error messages
  errorMessage.innerText = "";

  // Validate fields
  if (!name || !email || !phone || !subject || !message) {
      errorMessage.innerText = "Please fill out all fields.";
      return false;
  }

  // Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      errorMessage.innerText = "Please enter a valid email address.";
      return false;
  }

  // Validate phone number
  const phonePattern = /^\d+$/;
  if (!phonePattern.test(phone)) {
      errorMessage.innerText = "Please enter a valid phone number (digits only).";
      return false;
  }

  // If all validations pass
  alert("Form submitted successfully!");
  return true;
}