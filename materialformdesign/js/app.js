// UI
const labels = document.querySelectorAll('.form-group label');


labels.forEach(label=>{
    // console.log(labels);
    // console.log(label.innerText);
    // console.log(label.innerText.split());
    // console.log(label.innerText.split(''));
    
    label.innerHTML = label.innerText
        .split('')
        .map((letter,index)=>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
        .join('');

})