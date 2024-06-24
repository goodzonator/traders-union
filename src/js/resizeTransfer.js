/* LOGO TRANSFER */
const logo = document.querySelector('.header-top__logo');
const headerBottomInner = document.querySelector('.header-bottom__inner');

if (window.innerWidth < 768) {
    headerBottomInner.prepend(logo);
}
/* end LOGO TRANSFER */

/* sign in, register buttons TRANSFER */
const mobileMenuFooter = document.querySelector('.mobile-menu__footer');
const buttonsBlock = document.querySelector('.header-top__buttons');

if (window.innerWidth < 768) {
    mobileMenuFooter.prepend(buttonsBlock);
}

/* end sign in, register buttons TRANSFER */

// Функция для проверки ширины окна и обновления страницы
function checkWindowSize() {
    const currentWidth = window.innerWidth;

    const lastWidth = sessionStorage.getItem('lastWidth');

    if (currentWidth < 768 && (!lastWidth || lastWidth >= 768)) {
        sessionStorage.setItem('lastWidth', currentWidth);
        location.reload();
    }
    else if (currentWidth >= 768 && (!lastWidth || lastWidth < 768)) {
        sessionStorage.setItem('lastWidth', currentWidth);
        location.reload();
    }
}

window.addEventListener('resize', checkWindowSize);

checkWindowSize();