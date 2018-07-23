function login(loginScript) {
    var content = document.getElementById("content");
    var loginHtml = "<pre><form id='login' action='" + loginScript + " method='post' accept-charset='UTF-8'>" +
                        "<fieldset >" +
                            "<legend>Login</legend>" +
                            "<input type='hidden' name='submitted' id='submitted' value='1'/>" +   
                            "<label for='username' >UserName*:</label><br/>" +
                            "<input type='text' name='username' id='username'  maxlength='50' /><br/>" +    
                            "<label for='password' >Password*:</label><br/>" +
                            "<input type='password' name='password' id='password' maxlength='50' /><br/>" +  
                            "<input type='submit' name='Submit' value='Submit' />" +    
                        "</fieldset>" +
                    "</form></pre>";
    content.innerHTML = loginHtml;
}