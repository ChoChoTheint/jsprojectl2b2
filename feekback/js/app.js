//UI
const panel = document.getElementById('panel');
const ratingscontainer = document.querySelector('.ratings-container');
const rating = document.querySelectorAll('.rating');
const sendbtn = document.getElementById('send');

let selectedrating = 'Satified';

ratingscontainer.addEventListener('click',(e)=>{
    // console.log(e.target);

    // if(e.target.classList.contains('rating')){
    //     console.log(e.target);
    // };

    if(e.target.parentNode.classList.contains('rating')){
        // console.log(e.target);
        removeactive();

        e.target.parentNode.classList.add('active');

        // selectedrating = e.target.nextElementSibling.textContent;
        selectedrating = e.target.parentNode.lastElementChild.textContent;

    }else if(e.target.classList.contains('rating')){
        removeactive();

        e.target.classList.add('active');

        selectedrating = e.target.lastElementChild.textContent;
    }
});

function removeactive(){
    for(i = 0; i < rating.length; i++){
        rating[i].classList.remove('active');
    }
}

sendbtn.addEventListener('click',()=>{
    // console.log('hay');

    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You</strong>
        <strong>Feedback : ${selectedrating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;

});
