"use strict";

const header = document.querySelector('.header');
const menu = document.querySelector('.menu-principal');
const icon = document.querySelector('.header__navigation__icon-mob');

function scrollToSection(event) {
    if (event.target.tagName === 'A' && event.target.getAttribute('href') && event.target.getAttribute('href').startsWith('#')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const rect = targetSection.getBoundingClientRect();
            const offsetTop = rect.top + window.pageYOffset;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            if (icon && menu) {
                icon.classList.remove('open');
                menu.classList.remove('open');
            }
        }
    }
}
document.addEventListener('click', scrollToSection);

if (icon && menu) {
    icon.addEventListener('click', function() {
        icon.classList.toggle('open');
        menu.classList.toggle('open');
    });
}

const toggleButton = document.querySelector('.menu-toggle-button');
const navMenu = document.querySelector('.header__nav');

toggleButton.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

const items = document.querySelectorAll('.programatica__segmentacoes__list__item ul');

items.forEach((item) => {
    const itemHeight = item.scrollHeight;
    const parentHeight = item.parentElement.clientHeight;

    if (itemHeight > parentHeight) {
        item.classList.add('expandable');
    }
});
