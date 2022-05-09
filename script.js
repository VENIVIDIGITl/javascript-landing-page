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


// Hide Modal on outside click
const handleOutsideModalClick = (event) => {
  if (event.target.classList.contains('modal-container')) {
    hideModal();
  }
};


// Event Listeners
toggle.addEventListener('click', toggleNav);
open.addEventListener('click', showModal);
close.addEventListener('click', hideModal);
modal.addEventListener('click', handleOutsideModalClick);
