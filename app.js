

console.log('hello')

const header = document.querySelector('header');
const toggle_bar = document.querySelector('.toggle_bar');


toggle_bar.addEventListener('click' , function(){
    header.classList.toggle("active");
})



// Scroll Reveal
ScrollReveal({ 
    reset: true, 
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('header', {delay: 200, origin: 'top'});
ScrollReveal().reveal('#hero__text, #hero__content, #CTA__btn',{delay: 600, origin: 'left', interval: 400 })
ScrollReveal().reveal('#card__one, #card__two',{delay: 500, origin: 'bottom' , interval: 200 })




// Accordion

const faqs = document.querySelectorAll('.js-faq');
const faqSing = document.querySelector('.js-faq-sign');

faqs.forEach(faq =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('active');
        
    })
})


