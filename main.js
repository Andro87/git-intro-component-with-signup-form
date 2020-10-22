const form = document.getElementById("form");
const firstName = document.getElementById("first"); 
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const password = document.getElementById("password");
const firstNameError = document.getElementById("firsterror"); 
const lastNameError = document.getElementById("lasterror");
const emailError = document.getElementById("emailerror");
const passwordError = document.getElementById("passworderror");
const firstIcon = document.getElementById("firsticon");
const lastIcon = document.getElementById("lasticon");
const emailIcon = document.getElementById("emailicon");
const passwordIcon = document.getElementById("passwordicon");


const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;


const action = e => {
    e.preventDefault();

    if( firstName.value === ""){
        firstNameError.textContent = ("First Name cannot be empty");
        firstNameError.classList.add("message");
        firstName.classList.add("little--boxerror");
        firstIcon.classList.add("icon--error");

    }else{
        firstNameError.textContent = ("Valid");
        firstNameError.classList.add("message");
        firstName.classList.remove("little--boxerror");
        firstIcon.classList.remove("icon--error");
    }; 


    if ( lastName.value === ""){
        lastNameError.textContent = ("Last Name cannot be empty");
        lastNameError.classList.add("message");
        lastName.classList.add("little--boxerror");
        lastIcon.classList.add("icon--error");

    }else{
        lastNameError.textContent = ("Valid");
        lastNameError.classList.add("message");
        lastName.classList.remove("little--boxerror");
        lastIcon.classList.remove("icon--error");
    }; 
    

    if(email.value === ""){
        emailError.textContent = ("Please provide a valid email");
        emailError.classList.add("message");
        email.classList.add("little--boxerror");
        emailIcon.classList.add("icon--error");


    }else if (!email.value.match(re)){
        emailError.textContent = ("Please provide a valid email");
        emailError.classList.add("message");
        email.classList.add("little--boxerror");
        emailIcon.classList.add("icon--error");

    }else {
        emailError.textContent = ("Valid");
        emailError.classList.add("message");
        email.classList.remove("little--boxerror");
        emailIcon.classList.remove("icon--error");
    };

    if ( password.value === ""){
        passwordError.textContent = ("Password cannot be empty");
        passwordError.classList.add("message");
        password.classList.add("little--boxerror");
        passwordIcon.classList.add("icon--error");

    }else{
        passwordError.textContent = ("Valid");
        passwordError.classList.add("message");
        password.classList.remove("little--boxerror");
        passwordIcon.classList.remove("icon--error");
    }; 

}


form.addEventListener("submit",action);
