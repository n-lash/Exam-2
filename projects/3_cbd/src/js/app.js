
const header = document.getElementById('header');
const burger = document.getElementById('headerBurger');
const mobileMenu = document.getElementById('mobileMenu');
const navList = document.getElementById('navList');

const accordion = UIkit.accordion('.faqs-accordion', {
    active: 1,
    // collapsible: false,
});

document.addEventListener('scroll', () => {
    if (window.pageYOffset > header.clientHeight) {
        header.classList.add('bg-grey');
    } else {
        header.classList.remove('bg-grey');
    }
});

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});


navList.addEventListener('click', (ev) => {
    const items = document.querySelectorAll('.header-nav__link');

    Array.from(items).forEach(item => {
        item.classList.remove('selected');
    });
    ev.target.classList.add('selected');
});

