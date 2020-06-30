const openDialog = document.getElementById('open-dialog');
const closeDialog = document.getElementById('close-dialog');
const dialog = document.getElementById('dialog');
const expand = document.getElementById('expand-dialog');
const large = document.getElementById('large-dialog');

const openDialog2 = document.getElementById('open-dialog2');
const closeDialog2 = document.getElementById('close-dialog2');
const dialog2 = document.getElementById('dialog2');
const expand2 = document.getElementById('expand-dialog2');
const large2 = document.getElementById('large-dialog2');

openDialog.addEventListener("click", () => {
    dialog.classList.add('cui-active');
})

closeDialog.addEventListener("click", () => {
    dialog.classList.remove('cui-active');
})

expand.addEventListener("click", () => {
    if (dialog.classList.contains('cui-expanded')) {
        dialog.classList.remove('cui-expanded');
    } else {
        dialog.classList.add('cui-expanded');
    }
})

large.addEventListener("click", () => {
    if (dialog.classList.contains('cui-large')) {
        dialog.classList.remove('cui-large')
    } else {
        dialog.classList.add('cui-large');
    }
})


openDialog2.addEventListener("click", () => {
    dialog2.classList.add('cui-active');
})

closeDialog2.addEventListener("click", () => {
    dialog2.classList.remove('cui-active');
})

expand2.addEventListener("click", () => {
    if (dialog2.classList.contains('cui-expanded')) {
        dialog2.classList.remove('cui-expanded');
    } else {
        dialog2.classList.add('cui-expanded');
    }
})

large2.addEventListener("click", () => {
    if (dialog2.classList.contains('cui-large')) {
        dialog2.classList.remove('cui-large')
    } else {
        dialog2.classList.add('cui-large');
    }
})