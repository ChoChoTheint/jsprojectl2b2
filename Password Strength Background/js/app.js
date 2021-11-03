// UI
const background=document.getElementById('background');
const password=document.getElementById('password');
const eyeicon=document.getElementById('eye');

// Event Listener
password.addEventListener('input',(e)=>{
    // console.log('hey');

    // console.log(e.target.value);

    const input=e.target.value;
    const inlength=input.length;
    // console.log(inlength);
    // console.log(20 - inlength * 2);

    // inputထဲ pswရိုက်လိုက်တာနဲ့အမျှ backgroundကိုကြည်လာစေချင်တာ
    // blur valueက20ပေးထားလို့ 20ထဲကနုတ်
    // psw၁၀လုံးရောက်ရင် လုံးဝအကြည်ဖြစ်သွားစေချင်လို့ 2နဲ့မြှောက်
    
    if(inlength<=10){
        const blurvalue= 20 -  inlength * 2;
        background.style.filter=`blur(${blurvalue}px)`;
    }else{
        background.style.filter=`blur(${inlength-10}px)`;
    }
});

eyeicon.addEventListener('click',()=>{
    // console.log('hey');

    if(eyeicon.classList.contains('fa-eye')){
        console.log('showpassword');

        // Method 1
        // eyeicon.classList.remove('fa-eye');
        // eyeicon.classList.add('fa-eye-slash');

        // Method2                  old         new
        eyeicon.classList.replace('fa-eye','fa-eye-slash');

        password.setAttribute("type","text");
    }else{
        // console.log('hidepassword');
        // eyeicon.classList.add('fa-eye');
        // eyeicon.classList.remove('fa-eye-slash');

        eyeicon.classList.replace('fa-eye-slash','fa-eye');

        password.setAttribute("type","password");
    }
});
