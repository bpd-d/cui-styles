const mainCover = document.getElementById('main-cover');
const coverTrigger = document.getElementById('cover-trigger');

coverTrigger.addEventListener('click', () => {
    mainCover.classList.add('cui-active');
})