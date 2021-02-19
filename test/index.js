const darkModeTrigger = document.getElementById('toggle-dark-mode');
const printModeTrigger = document.getElementById('toggle-print-mode');
const focusVisibeTrigger = document.getElementById('toggle-focus-visible');
darkModeTrigger.addEventListener('click', () => {
    if (document.body.classList.contains('cui-dark')) {
        document.body.classList.remove('cui-dark')
        darkModeTrigger.classList.remove('cui-active')
    } else {
        document.body.classList.add('cui-dark')
        darkModeTrigger.classList.add('cui-active')
    }
})




printModeTrigger.addEventListener('click', () => {
    if (document.body.classList.contains('cui-print')) {
        document.body.classList.remove('cui-print')
        printModeTrigger.classList.remove('cui-active')
    } else {
        document.body.classList.add('cui-print')
        printModeTrigger.classList.add('cui-active')
    }
})


if (focusVisibeTrigger) {
    focusVisibeTrigger.addEventListener('click', () => {
        if (document.body.classList.contains('focus-precise')) {
            document.body.classList.remove('focus-precise')
            focusVisibeTrigger.classList.remove('cui-active')
        } else {
            document.body.classList.add('focus-precise')
            focusVisibeTrigger.classList.add('cui-active')
        }
    })
}
