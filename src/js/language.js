const languageBtn = document.querySelector('.language__btn');
const languageBlock = document.querySelector('.language');

languageBtn.addEventListener('click', function () {
    this.classList.toggle('active');
    languageBlock.classList.toggle('active');

});

document.addEventListener( 'click', (e) => {
    if ( !e.composedPath().includes(languageBtn) &&  !e.composedPath().includes(languageBlock)) {
        languageBtn.classList.remove('active');
        languageBlock.classList.remove('active');
    }
})