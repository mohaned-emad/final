window.onload=submit;
function submit(){
    var form = document.getElementById("createAccount");
    form.onsubmit = validation_sign;
}

function special(password){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(password);
}

function contain_number(password){
    return /\d/.test(password);
}

function validation_sign(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var result = email.includes("@");
    var first = password.charCodeAt(0);
    var length = password.length;
    var phone = document.getElementById("mobile").value;
    var phonel = phone.length;
    var valid = true;

    if(phonel != 11){
        alert("phone length must be 11 numbers");
        valid = false;
        document.getElementById("mobile").style.borderColor="red";
    }
    if(isNaN(phone) == true){
        alert("not a valid number");
        valid = false;
        document.getElementById("mobile").style.borderColor="red";
    }
    if(length != 8){
        alert("password must be 8 characters no more no less");
        valid = false;
        document.getElementById("password").style.borderColor="red";
    }
    if(password.includes(" ") == true){
        alert("password can not contain any white spaces");
        valid = false;
        document.getElementById("password").style.borderColor="red";
    }
    if(first < 65 || first > 90){
        alert("Password must begin with uppercase letter");
        valid = false;
        document.getElementById("password").style.borderColor="red";
    }
    if(contain_number(password) == false){
        alert("Password must contain atleast one number");
        valid = false;
        document.getElementById("password").style.borderColor="red";
    }
    if(special(password) == false){
        alert("Password must contain atleast one special character");
        valid = false;
        document.getElementById("password").style.borderColor="red";
    }
    if(document.getElementById("male").checked == false && document.getElementById("female").checked == false){
        alert("gender must be selected");
        valid = false;
    }
    if(valid == true){
        alert("thanks for sign up");
        alert("redirecting you to home page");
        window.location="index.html";
    }
    return valid;

}