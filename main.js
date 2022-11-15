const errorMessage = document.querySelector("#error-password")
const errorConfirm = document.querySelector("#error-confirm")
errorMessage.style.display = "none"
errorConfirm.style.display = "none"
function checkPass(form) {
    password = form.password.value;
    c_password = form.c_password.value;

    if (password === '' && c_password == '' ){
        errorMessage.style.display = 'block'
        errorMessage.textContent = "*Enter a Password";
        errorConfirm.style.display = 'block'
        errorConfirm.textContent = "*Enter a Confirm Password";
        return false;     
    }else if (c_password == ''){
        errorConfirm.style.display = 'block'
        errorConfirm.textContent = "*Enter a Confirm Password";
        return false;
    }else if(password == ''){
        errorMessage.style.display = 'block'
        errorMessage.textContent = "*Enter a Password";
    }else if(password != c_password) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = "*Passwords do not match"
        return false;
    }
    else{
        alert("Password Match: Welcome to GeeksforGeeks!")
        return true;
    }
}
