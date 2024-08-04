const navMenu = document.querySelector('.nav-menu');
let navHamburger = null;

const toggleActiveClass = (element) => element.classList.toggle('active-hg');

const clickHamburger = (button) => {
  toggleActiveClass(button);
  toggleActiveClass(navMenu);
  navHamburger = button;
};

const clickNavMenu = () => {
  if (navHamburger) {
    toggleActiveClass(navHamburger);
    toggleActiveClass(navMenu);
  }
};