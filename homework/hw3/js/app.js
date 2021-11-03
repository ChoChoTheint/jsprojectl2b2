const faqtoggles = document.querySelectorAll('.faq-toggle');

faqtoggles.forEach(faqtoggle=>{

    faqtoggle.addEventListener('click',()=>{
        faqtoggle.parentElement.classList.toggle('active');
    });
    
});