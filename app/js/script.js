
const navls = document.getElementById('nav_list');
const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close')


hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    hamburger.style.display = 'none';
    close.style.display = 'block';
    navls.style.display = 'block';
})

close.addEventListener('click', (e) => {
    e.preventDefault();
    close.style.display = 'none';
    hamburger.style.display = 'block';
    navls.style.display = 'none';

})
