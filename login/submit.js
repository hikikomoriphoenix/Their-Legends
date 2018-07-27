/**
 * Checks if username and password inputs are even valid before submitting
 */
function submitValidLogin() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");    

    if (validateLogin(username, password)) {
        alert("Invalid username or password");
        return false;
    } else {
        return true;
    }
}

function validateLogin(username, password) {
    // Validate username
    var usernameIsValid = /^[-\w\.\$@\*\!]{1,16}$/.test(username) ? true : false;

    // Validate password
    var passwordIsValid = /^[\S]{6,16}$/.test(password) ? true : false;

    return usernameIsValid && passwordIsValid ? true : false;
}