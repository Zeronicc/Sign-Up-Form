const errorMessage = document.querySelector("#error-password");
const errorConfirm = document.querySelector("#error-confirm");
const noFirstName = document.querySelector("#first-name");
const contactInfo = document.querySelector("#contact");
const telError = document.querySelector("#tel-number")
const body = document.querySelector(".main-container");
const input = document.querySelectorAll("input");

input.forEach(e => onEvent(e));


function onEvent(event) {
    if (event.key === "Enter") {
        return checkForm();
    }
};

function checkForm(form) {
    
    password = form.password;
    c_password = form.c_password;
    first_name = form.first_name;
    email = form.email;
    phoneNumber = form.tel_number;
    checkName();
    checkPass();
    checkContact();
    return checkName() && checkPass() && checkContact()  ? true : false;
};


function checkPass(){
    errorConfirm.textContent = "";
    errorMessage.textContent = "";
    password.classList.remove("error-border");
    c_password.classList.remove("error-border")
    password.setCustomValidity("");

    if (password.value == '' && c_password.value == '' ){
        errorMessage.textContent = "*Enter a Password";
        password.classList.add("error-border")
        errorConfirm.textContent = "*Enter a Confirm Password";
        c_password.classList.add("error-border")
        return false;     
    }else if(password.value == ''){
        password.classList.add("error-border")
        errorMessage.textContent = "*Enter a Password";
        return false;
    }else if(password.value.length < 6){
        password.classList.add("error-border")
        errorMessage.textContent = "*At least 6 characters";
    }else if(password.value != c_password.value) {
        c_password.classList.add("error-border")

        errorMessage.textContent = "*Passwords do not match"
        return false;
    }else{
        password.classList.remove("error-border");
        return true;
    }
};

function checkName(){
    noFirstName.textContent = "";
    first_name.classList.remove("error-border");
    if(first_name.value == ''){
        noFirstName.textContent = "*Enter Your Name";
        first_name.classList.add("error-border");
        return false
    }else{return true}
};

function checkContact(){
    contactInfo.textContent = "";
    telError.textContent = "";
    phoneNumber.placeholder = "";
    email.classList.remove("error-border");
    phoneNumber.classList.remove("error-border");
    if(email.value == '' && phoneNumber.value == ''){
        email.classList.add("error-border");
        phoneNumber.classList.add("error-border");
        contactInfo.textContent = "*Require Any Contact Info";
        return false;
    }else if(!checkPhoneNumber(phoneNumber.value)){
        phoneNumber.classList.add("error-border");
        phoneNumber.placeholder = "(123) 456-7890"
        telError.textContent = "*Enter a Phone Number";
        return false;
    }else if(!checkEmail(email.value)){
        email.classList.add("error-border");
        contactInfo.textContent = "*Enter a Valid Email";
        return false
    }else{return true};
};

function checkPhoneNumber(str) {
    const num = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if(str == '') return true;
    return num.test(str);
};

function checkEmail(str){
    if(str == '') return true
    return String(str)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

