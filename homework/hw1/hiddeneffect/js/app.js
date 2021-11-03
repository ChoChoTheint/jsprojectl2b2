// UI
const searchel = document.querySelector('.search'),
    inputel = document.querySelector('.text'),
    buttonel = document.querySelector('.btn');

    buttonel.addEventListener('click',()=>{

        searchel.classList.toggle('active');
        inputel.focus();
    });