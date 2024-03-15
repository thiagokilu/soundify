document.addEventListener('DOMContentLoaded', () => {
    const mobileSearch = document.getElementById('busca-mobile');
    const headerNavigation = document.querySelector(".header__navigation");

    mobileSearch.addEventListener("click", () => {
        console.log('deu');
        headerNavigation.classList.remove("hidden-mobile");
        resultPlaylist.classList.add("hidden");
    });
});