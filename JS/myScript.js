const bar = document.querySelector('.burgerNav');
const nav = document.querySelector('.navbar');
const exit = document.querySelector('.exit');
const home = document.querySelector('.container');

nav.style.display = 'none';

bar.addEventListener('click', () => {
    nav.style.display = 'block';
    home.style.display = 'none';
});

exit.addEventListener('click', () => {
    nav.style.display = 'none';
    home.style.display = 'block';
});