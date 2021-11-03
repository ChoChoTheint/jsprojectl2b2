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

