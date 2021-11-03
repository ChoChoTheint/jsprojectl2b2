// UI hiddensearch
const searchel = document.querySelector('.search'),
    inputel = document.querySelector('.text'),
    buttonel = document.querySelector('.btn');

    buttonel.addEventListener('click',()=>{

        searchel.classList.toggle('active');
        inputel.focus();
    });


// UI counteffect
const counts = document.querySelectorAll('.count');


counts.forEach((count)=>{
    count.innerText = '0';
    // console.log(count);

    const myfun = ()=>{

     const  target = +count.getAttribute('data-target');
     const ctr = +count.innerText;
     const incre = target/100;

     if(ctr < target){
        count.innerText = `${Math.ceil(ctr + incre)}`;
        setTimeout(myfun,50);
     }

    }

    myfun();
});

// UI autotext
// UI
const textel = document.querySelector('.text');
const speedel = document.querySelector('.speed');
const pgh = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione facere perspiciatis! Doloribus animi praesentium necessitatibus? Rem blanditiis ipsam porro tenetur eius ad veritatis, corrupti, quidem voluptatibus perferendis excepturi. Commodi.";

let idx = 3;
let speed = 1000;

function text(){

 textel.innerText = pgh.slice(0,idx);
    idx ++;

 if(pgh > pgh.length){
    idx = 1;
 }
 setTimeout(text,speed);

}

text();


speedel.addEventListener('click',()=>{

speed = 100 / speedel.value;
    
});