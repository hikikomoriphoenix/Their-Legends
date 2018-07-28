/**
 * Checks if username and password inputs are even valid before submitting
 */
function submitValidLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;    

    if (validateLogin(username, password)) {
        var BACK_END_LOGIN = BACK_END_DIR + "login.php";
        var BACK_END = BACK_END_DIR;

        var xhr = createCORSRequest('GET', BACK_END);
        if (!xhr) {
            alert('CORS not supported');
            return false;
        } 
        
        xhr.onload = function() {
            alert("success.");
        };

        xhr.onerror = function() {
            alert("failed.");
        }

        params = "user=" + username + "&pass=" + password;
        //xhr.setRequestHeader("content-type", "x-www-form-urlencoded");
        xhr.send();
    } else {
        alert("Invalid username or password");
        return false;
    }
}

function validateLogin(username, password) {
    // Validate username
    var usernameIsValid = /^[-\w\.\$@\*\!]{1,16}$/.test(username) ? true : false;

    // Validate password
    var passwordIsValid = /^[\S]{6,16}$/.test(password) ? true : false;

    return usernameIsValid && passwordIsValid ? true : false;
}