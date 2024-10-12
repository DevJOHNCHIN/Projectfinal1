
// header scroll effect
window.addEventListener("scroll", function () {
    const header = document.querySelector('.header');
    if (this.window.scrollY > 0) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
});
// course-header scroll effect
window.addEventListener("scroll", function () {
    const courseHeader = document.querySelector('.course-header');
    if (this.window.scrollY > 0) {
        courseHeader.classList.add("scroll");
    } else {
        courseHeader.classList.remove("scroll");
    }
});

// Password visibility
document.addEventListener('DOMContentLoaded', function () {
    const togglePass = document.querySelector(".toggle-password");
    const passwordInput = document.querySelector(".pass");

    togglePass.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePass.classList.remove("fa-eye");
            togglePass.classList.add("fa-eye-slash");
        } else {
            passwordInput.type = "password";
            togglePass.classList.remove("fa-eye-slash");
            togglePass.classList.add("fa-eye");
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const togglePass = document.querySelector(".togglepassword");
    const passwordInput2 = document.querySelector("#Cpass");

    togglePass.addEventListener("click", () => {

        console.log("eye is clicked");
        if (passwordInput2.type === "password") {
            passwordInput2.type = "text";
            togglePass.classList.remove("fa-eye");
            togglePass.classList.add("fa-eye-slash");
        } else {
            passwordInput2.type = "password";
            togglePass.classList.remove("fa-eye-slash");
            togglePass.classList.add("fa-eye");
        }
    });

});


document.addEventListener('DOMContentLoaded', function () {
    // const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
    const toggleButtonIndex = document.querySelector('.header-box .mobile-menu-toggle');
    // const mobileMenu = document.querySelector('.navbar .mobile-menu-items');
    const mobileMenuIndex = document.querySelector('.header-box .mobile-menu-items');

    toggleButtonIndex.addEventListener('click', () => {
        mobileMenuIndex.classList.toggle('active');
        toggleButtonIndex.classList.toggle('active');
    });
});


// form validation

function validation() {
    // if (document.Form1.Firstname.value == "") {
    //     document.getElementById("result").innerHTML = "Enter First Name";
    //     return false;
    // }
    if (document.Form1.username.value == "") {
        document.getElementById("error").innerHTML = "Enter Last Name";
        return false;
    }
    else if (document.Form1.email.value == "") {
        document.getElementById("error").innerHTML = "Enter Email Address";
        return false;
    }
    else if (document.Form1.password.value == "") {
        document.getElementById("error").innerHTML = "Enter Password";
        return false;
    }
    else if (document.Form1.confirm_password.value == "") {
        document.getElementById("error").innerHTML = "Enter Cornfirm Password";
        return false;
    }
    else if (document.Form1.confirm_password.value !== document.Form1.password.value) {
        document.getElementById("error").innerHTML = "Password Doesn't Match";
        return false;
    }
};

// login validation
function validationLogin() {
    if (document.Form2.email.value == "") {
        document.getElementById("error").innerHTML = "Enter Email Address";
        return false;
    }
    else if (document.Form2.password.value == "") {
        document.getElementById("error").innerHTML = "Enter Password";
        return false;
    }
}