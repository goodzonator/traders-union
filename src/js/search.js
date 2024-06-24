const searchBtn = document.querySelector('.search__btn');
const searchInput = document.querySelector('.search-input');

searchBtn.addEventListener('click', function () {
    this.classList.toggle('active');
    searchInput.classList.toggle('active');

});

document.addEventListener( 'click', (e) => {
    if ( !e.composedPath().includes(searchBtn) &&  !e.composedPath().includes(searchInput)) {
        searchBtn.classList.remove('active');
        searchInput.classList.remove('active');
    }
})