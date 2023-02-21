import './style.css';
import displayHome from './displayHome.js';
import displayMenu from './displayMenu.js';
import displayContact from './displayContact.js';

// Load homepage on load
displayHome();

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');

// Function to wipe current content
function clearContent() {
  content.innerHTML = '';
}

homeBtn.addEventListener('click', () => {
  clearContent();
  displayHome();
})

menuBtn.addEventListener('click', () => {
  clearContent();
  displayMenu();
})

contactBtn.addEventListener('click', () => {
  clearContent();
  displayContact();
})