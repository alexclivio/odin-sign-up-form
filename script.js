const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm_password");
const form = document.querySelector(".sign-up-form");

function validatePasswords() {
  console.log("pressed")
    if (password.value === confirm_password.value) {
      confirm_password.setCustomValidity(""); 
        password.style.borderColor = "green";
        confirm_password.style.borderColor = "green";
    } else {
        confirm_password.setCustomValidity("Passwords do not match!");
        password.style.borderColor = "red";
        confirm_password.style.borderColor = "red";
    }
}

password.addEventListener("input", validatePasswords);
confirm_password.addEventListener("input", validatePasswords);