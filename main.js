BACK_END_DIR = "https://hikikomoriphoenix.000webhostapp.com/Their-Legends/";

// put code here if login form should be displayed
var accessKey = sessionStorage.getItem("access_key");
if (accessKey == null) {
    login(BACK_END_DIR + "login.php");
}