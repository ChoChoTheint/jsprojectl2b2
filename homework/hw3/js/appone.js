const panels = document.querySelectorAll('.panel');

panels.forEach(panel=>{
    // console.log(panel);

    panel.addEventListener('click',()=>{
        removeacivepreclass();
        panel.classList.add('active');
    });
});

function removeacivepreclass(){

    panels.forEach(panel=>{
        panel.classList.remove('active');
        
    });

}