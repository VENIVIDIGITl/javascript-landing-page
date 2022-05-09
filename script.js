const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');


// Toggle Navigation
const toggleNav = () => {
  document.body.classList.toggle('show-nav');
};


// Show Modal
const showModal = () => {
  modal.classList.add('show-modal');
};


// Hide Modal
const hideModal = () => {
  modal.classList.remove('show-modal');
};


// Event Listeners
toggle.addEventListener('click', toggleNav);
open.addEventListener('click', showModal);
close.addEventListener('click', hideModal);