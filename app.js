

console.log('hello')

const header = document.querySelector('header');
const toggle_bar = document.querySelector('.toggle_bar');


toggle_bar.addEventListener('click' , function(){
    header.classList.toggle("active");
})



// Scroll Reveal
// ScrollReveal({ 
//     reset: true, 
//     distance: '60px',
//     duration: 2500,
//     delay: 400
// });

// ScrollReveal().reveal('header', {delay: 200, origin: 'top'});
// ScrollReveal().reveal('#hero__text, #hero__content, #CTA__btn',{delay: 600, origin: 'left', interval: 400 })
// ScrollReveal().reveal('#card__one, #card__two',{delay: 500, origin: 'bottom' , interval: 200 })


// AOS animation on scroll function calling

AOS.init();



// Accordion

const faqs = document.querySelectorAll('.js-faq');
const faqSing = document.querySelector('.js-faq-sign');

faqs.forEach(faq =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle("activated");
    })
})


// contact form validation

const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email')
const subject = document.querySelector('#subject');
const textArea = document.querySelector('#textArea');


form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInput ();
})

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}

const isValidEmail = email =>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(String(email).toLowerCase());
}


const validateInput = ()=>{
    const userValue = username.value.trim();
    const emailValue = email.value.trim();
    const subValue = subject.value.trim();
    const textArValue = textArea.value.trim();
    
    // conditions
    if(userValue === ''){
        setError(username, 'field is required*');

    }else{
        setSuccess(username);
    }

    // email
    if(emailValue === ''){
        setError(email, 'field is required*');

    }else if(!isValidEmail(emailValue)){
        setError(email, 'not a valide email')

    }else{
        setSuccess(email)
    }

    // subject
    if(subValue === ''){
        setError(subject, 'field is required*')

    }else{
        setSuccess(subject)
    }

    // textAreas
    if(textArValue === ''){
        setError(textArea, 'kindly fill this field, to let us know your request');
    }else{
        setSuccess(textArea);
    }

    emptyInput(); // not working yet

}

const emptyInput = ()=>{
    username.value = '';
    email.value = '';
    subject.value = '';
    textArea.value = ''
}

