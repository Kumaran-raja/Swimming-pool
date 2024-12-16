// Select the scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Side Navigation
const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');
const closeBtn = document.getElementById('closeBtn');

let isOpen = false;

menuBtn.addEventListener('click', () => {
  isOpen = !isOpen;
  sideNav.classList.toggle('open', isOpen);
  closeBtn.style.display = isOpen ? 'block' : 'none';
});

closeBtn.addEventListener('click', () => {
  isOpen = false;
  sideNav.classList.remove('open');
  closeBtn.style.display = 'none';
});
const menuItems = document.querySelectorAll('.menu-item');




// form validation

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMessage = document.getElementById("errorMessage");

  errorMessage.innerText = "";

  if (!name || !email || !phone || !subject || !message) {
      errorMessage.innerText = "Please fill out all fields.";
      return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      errorMessage.innerText = "Please enter a valid email address.";
      return false;
  }

  const phonePattern = /^\d+$/;
  if (!phonePattern.test(phone)) {
      errorMessage.innerText = "Please enter a valid phone number (digits only).";
      return false;
  }

  alert("Form submitted successfully!");
  return true;
}

const contact=document.getElementById("contact_btn");
contact.addEventListener('click',()=>{
  window.location.href = "/Contact Us.html";
})