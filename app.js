

console.log('hello')

const header = document.querySelector('header');
const toggle_bar = document.querySelector('.toggle_bar');


toggle_bar.addEventListener('click' , function(){
    header.classList.toggle("active");
})


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

const formForm = document.querySelector('#js-form');


document.addEventListener('DOMContentLoaded', () =>{
    // Render contact form and sign form
    setTimeout(() => {
        
        renderContactForm();
    },500);

    // renderSignForm();
    renderSignForm();
})

function renderContactForm (){
    
    const form = document.querySelector('#js-form');
    
    if(!form){
        console.log('Contact form no found in DOm');
        return;
    }

    form.addEventListener('submit', e =>{
        e.preventDefault();
    
        validateInput ();
    })
    
}

const validateInput = ()=>{
    const username = document.querySelector('#username');
    const email = document.querySelector('#email')
    const subject = document.querySelector('#subject');
    const textArea = document.querySelector('#textArea');

    // input Values
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

    username.value = '';
    email.value = '';
    subject.value = '';
    textArea.value = '' // not working yet

}

function isValidEmail (email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(String(email).toLowerCase());
}

function setError (element, message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function setSuccess (element){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}



// signing page
const signButton = document.querySelectorAll('.signBtn');
const signUp = document.querySelector('#form-signUp');
const signIn = document.querySelector('#form-signIn');

signButton.forEach(button =>{

    button.addEventListener('click', ()=>{

        if(button === signButton[0]){
            signUp.parentElement.classList.toggle('formActive')
            
        }else if(button === signButton[1]){
            signIn.parentElement.classList.toggle('formActive')
            
        }
    })
    
})


// Sign up and sign in storage
const checkLog = {
   email : '',
   password: '',
   confirmPassword : ''
}

// Render sign up and sign in form
function renderSignForm (){
    

    // Sign up form validation
    const formSignUP = document.querySelector('#form-signUp');
    
    // sign In form validation
    const formSignIn = document.querySelector('#form-signIn');

    
    formSignUP.addEventListener('submit', e =>{
        e.preventDefault();
    
        validateSignUp ()
        
    }) 

    formSignIn.addEventListener('submit', e =>{
        e.preventDefault();
    
        validateSignIn ();
    })
    
}


//sign Up validation
function validateSignUp () {
    
    const firstSignUp = document.querySelector('#firstName-signUp');
    const lastSignUp = document.querySelector('#lastName-signUp');
    const emailSignUp = document.querySelector('#email-signUp');
    const phoneSignUp = document.querySelector('#phone-signUp');
    const passwordSignUp = document.querySelector('#password-signUp');
    const confirmPasswordSignUp = document.querySelector('#confirmPassword-signUp');

    // input Values
    const firstValueSignUp = firstSignUp.value.trim();
    const lastValueSignUp = lastSignUp.value.trim();
    const emailValueSignUp = emailSignUp.value.trim();
    const phoneValueSignUp = phoneSignUp.value.trim();
    const passwordValueSignUp = passwordSignUp.value.trim();
    const confirmPasswordValueSignUp = confirmPasswordSignUp.value.trim();

    // conditions
    // first name
    if(firstValueSignUp === ''){
        setError(firstSignUp, 'field is required*');
    }else{
        setSuccess(firstSignUp);
    }

    // last name
    if(lastValueSignUp === ''){
        setError(lastSignUp, 'field is required*');
    }else{
        setSuccess(lastSignUp);
    }

    //phone
    if(phoneValueSignUp === ''){
        setError(phoneSignUp, 'field is required&')
    }else[
        setSuccess(phoneSignUp)
    ]

    // email
    if(emailValueSignUp === ''){
        setError(emailSignUp, 'field is required*');

    }else if(!isValidEmail(emailValueSignUp)){
        setError(emailSignUp, 'not a valide email')

    }else{
        setSuccess(emailSignUp)
        
        checkLog.email = emailValueSignUp;
    }

    // password
    if(passwordValueSignUp === ''){
        setError(passwordSignUp, 'field is required*')
        
    }else if(passwordValueSignUp.length < 8){
        setError(passwordSignUp, 'password must be at least 8 characters')

    } else{
        setSuccess(passwordSignUp)
        checkLog.password = passwordValueSignUp;
    }

    // confirm password
    if(confirmPasswordValueSignUp === ''){
        setError(confirmPasswordSignUp, 'field is required*')

    }else if(confirmPasswordValueSignUp !== passwordValueSignUp){
        setError(confirmPasswordSignUp, 'passwords do not match')

    }else{
        setSuccess(confirmPasswordSignUp);
        checkLog.confirmPassword = confirmPasswordValueSignUp;
    }

    emptyInput(firstSignUp,lastSignUp,emailSignUp,phoneSignUp,passwordSignUp,confirmPasswordSignUp);
    
}

// sign In validation
function validateSignIn (){
    const emailSignIn = document.querySelector('#email-signIn');
    const passwordSignIn = document.querySelector('#password-signIn');
    const confirmPasswordSignIn = document.querySelector('#confirmPassword-signIn');
    
    //input values
    const emailSignInValue = emailSignIn.value.trim();
    const passwordSignInValue =passwordSignIn.value.trim()
    const confirmPasswordSignInValue = confirmPasswordSignIn.value.trim();
    
    // condition
    if(emailSignIn === checkLog.email && passwordSignIn === checkLog.password && confirmPasswordSignIn === checkLog.confirmPassword){
        console.log('logged In');
        
    }else{
        console.log("Incorrect info");
        
    }

    emptyInput(emailSignIn,passwordSignIn, confirmPasswordSignInValue)
}


// // Empty input function
function emptyInput(firstName,lastName,email,phone,password,confirmPassword){
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phone.value = '';
    password.value = '';
    confirmPassword.value = ''
}


console.log('who is awake');


