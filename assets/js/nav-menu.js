const navMenu = document.querySelector('.nav-menu');
let navHamburger = '';

function clickHamburger(button) {
  button.classList.toggle('active-hg');
  navMenu.classList.toggle('active-hg');
  navHamburger = button;
}

function clickNavMenu() {
  navHamburger.classList.toggle('active-hg');
  navMenu.classList.toggle('active-hg');
}
