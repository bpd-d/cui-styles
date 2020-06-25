const mainCover = document.getElementById('main-cover');
const coverTrigger = document.getElementById('cover-trigger');
const darkModeTrigger = document.getElementById('toggle-dark-mode');

coverTrigger.addEventListener('click', () => {
    mainCover.classList.add('cui-active');
    document.body.classList.add('cui-overflow-hidden');
})

darkModeTrigger.addEventListener('click', () => {
    if (document.body.classList.contains('cui-dark')) {
        document.body.classList.remove('cui-dark')
    } else {
        document.body.classList.add('cui-dark')
    }
})