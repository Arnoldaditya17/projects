const openbtn = document.getElementById('open-btn');
const closebtn = document.getElementById('close-btn');
const popupcontainer = document.querySelector('.popup-container');
openbtn.addEventListener('click', () => {
    popupcontainer.classList.add('blur');
    popupcontainer.style.display = 'flex';
})
closebtn.addEventListener('click', () => {
    popupcontainer.classList.remove('blur');
    popupcontainer.style.display = 'none';
})