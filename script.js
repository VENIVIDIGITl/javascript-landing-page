const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const nav = document.getElementById('nav');


// Toggle Navigation
const toggleNav = () => {
  document.body.classList.toggle('show-nav');
  if (document.body.classList.contains('show-nav')) {
    document.body.addEventListener('click', handleOutsideNavClick);
  }
};


// Hide Navigation on outside click
const handleOutsideNavClick = (event) => {
  if (document.body.classList.contains('show-nav') 
      && event.target !== toggle
      && !toggle.contains(event.target)
      && event.target !== nav
      && !nav.contains(event.target)
  ) {
    document.body.classList.remove('show-nav');
    document.body.removeEventListener('click', handleOutsideNavClick);
  } 
  
  else if (!document.body.classList.contains('show-nav')) {
    document.body.removeEventListener('click', handleOutsideNavClick);
  }
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
