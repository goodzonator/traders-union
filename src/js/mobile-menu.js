if (window.innerWidth < 768) {
    const mobileMenuBody = document.querySelector('.mobile-menu__body');
    const menu = document.querySelector('.header-bottom__menu');

    mobileMenuBody.appendChild(menu);


    const mobileMenuWrap = document.querySelector('.mobile-menu-wrap');
    const mobileMenuBtn = document.querySelector('.mobile-menu__btn');

    mobileMenuBtn.addEventListener('click', function () {
        mobileMenuWrap.classList.add('active');
    });


    const mobileMenuClose = document.querySelector('.mobile-menu__close');
    const mobileMenuBg = document.querySelector('.mobile-menu__bg');

    mobileMenuClose.addEventListener('click', function () {
        mobileMenuWrap.classList.remove('active');
    });
    mobileMenuBg.addEventListener('click', function () {
        mobileMenuWrap.classList.remove('active');
    });
}