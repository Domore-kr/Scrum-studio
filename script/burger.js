document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.burger_menu');

    burger.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});