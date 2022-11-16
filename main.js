const errorMessage = document.querySelector("#error-password")
const errorConfirm = document.querySelector("#error-confirm")
const body = document.querySelector(".main-container")

function checkForm(form) {
    password = form.password.value;
    c_password = form.c_password.value;
    return checkPass();
   
}


function checkPass(){
    errorConfirm.textContent = "";
    errorMessage.textContent = "";
    if (password === '' && c_password == '' ){
        errorMessage.style.margin = "0px"
        errorMessage.textContent = "*Enter a Password";
        errorConfirm.style.margin = "0px"
        errorConfirm.textContent = "*Enter a Confirm Password";
        return false;     
    }else if (c_password == ''){
        errorConfirm.style.margin = '0px'
        errorConfirm.textContent = "*Enter a Confirm Password";
        return false;
    }else if(password == ''){
        errorMessage.style.margin = '0px'
        errorMessage.textContent = "*Enter a Password";
        return false;
    }else if(password != c_password) {
        errorMessage.style.margin = '0px';
        errorMessage.textContent = "*Passwords do not match"
        return false;
    }
    else{
        body.style.display = "none";
        return true;
    }
}