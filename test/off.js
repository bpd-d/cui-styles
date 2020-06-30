const offOpen = document.getElementById('off-open');
const offOpenLeft = document.getElementById('off-open-left');
const off = document.getElementById('off-canvas');
const offLeft = document.getElementById('off-canvas-left');
const offClose = document.getElementById('off-close');
const offCloseLeft = document.getElementById('off-close-left');

offOpen.addEventListener("click", () => {
    off.classList.add('cui-active');
})

offOpenLeft.addEventListener("click", () => {
    offLeft.classList.add('cui-active');
})

offClose.addEventListener("click", () => {
    off.classList.remove('cui-active');
})

offCloseLeft.addEventListener("click", () => {
    offLeft.classList.remove('cui-active');
})