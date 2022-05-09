const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');


// Toggle Navigation
const toggleNav = () => {
  document.body.classList.toggle('show-nav');
};


// Event Listeners
toggle.addEventListener('click', toggleNav);
