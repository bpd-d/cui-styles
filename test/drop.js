buttons = [
    'drop-bottom-center-open',
    'drop-bottom-left-open',
    'drop-bottom-right-open',
    'drop-top-center-open',
    'drop-top-left-open',
    'drop-top-right-open',
    'drop-default-open',
    "drop-navbar-open"
]

drops = [
    'drop-bottom-center',
    'drop-bottom-left',
    'drop-bottom-right',
    'drop-top-center',
    'drop-top-left',
    'drop-top-right',
    'drop-default',
    "drop-navbar"
]

dropdowns = []
drops.forEach(d => {
    const el = document.getElementById(d);
    el.addEventListener('click', () => {
        el.classList.remove('cui-active');
    })
    dropdowns.push(el);
})

buttons.forEach((b, idx) => {
    const btn = document.getElementById(b)
    btn.addEventListener('click', () => {
        dropdowns[idx].classList.add('cui-active');
    })
})