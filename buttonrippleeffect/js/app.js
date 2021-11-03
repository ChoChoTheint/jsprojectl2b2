// UI
const buttons = document.querySelectorAll('.btnripple');
// console.log(buttons);
buttons.forEach(button=>{
    // console.log(button);
    button.addEventListener('click',(e)=>{
        // console.log('i am working');
        const cx = e.clientX,
              cy = e.clientY;
                        // Y win yoe
        const btntop = e.target.offsetTop,
                        // X win yoe
              btnleft = e.target.offsetLeft;
            // console.log(btnleft);

            const xinside = cx-btnleft,
                yinside = cy-btntop;

            const circle = document.createElement('span');
            circle.classList.add('circle');
            circle.style.top = yinside+"px";
            circle.style.left= xinside+"px";

            e.target.appendChild(circle);
            
            setTimeout(()=>{
                circle.remove();
            },600);
    });
});